var PageHandler = (function( handler ){
    
    /**
     * Collection of page templates searchable by key 
     */
    var _byKey = new Object();
    
    /**
     * Collection of page templates searchable by index 
     */
    var _byIndex = new Array();
    
    /**
     * Collection of page handlebar template data 
     */
    var _templates = new Object();
    
    /**
     * Add a template to the handler 
     */
    handler.add = function( template ) {
        // add template when one by the same name does not already exist
        if ( !_byKey.hasOwnProperty(template.name) ) {
            _byIndex.push(template);
            _byKey[template.name] = template;
            
            // initialize the template
            template.onShellLoad();
        }
    };
    
    /**
     * Retrieve a page template by its key 
     */
    handler.get = function( key ) {
        return _byKey[key];
    };
    
    /**
     * Retrieve a page template by its index 
     */
    handler.getByIndex = function( i ) {
        return _byIndex[i];
    };
    
    handler.currentKey = null;
    
    handler.currentType = null;
    
    /**
     * Use a page template to load a page 
     */
    handler.load = function( key, pageData, parentSelector, callback ) {
        var template = this.get( key );
        
        // notify subscribers that the page is starting to load.
        handler.fireEvent('load-start');
        // When the template data has been cached
        if ( _templates.hasOwnProperty( template.name ) ) {
            // didn't have to load anything, but we should fire this
            handler.fireEvent('load-complete');
            handler.currentKey = key;
            handler.currentType = template.name;
            // handlebar template was previously loaded and compiled, use it
            generatePage( _templates[template.name], pageData, template, parentSelector );
            if ( isFunction( callback ) ) {
                callback();
            }
        } 
        // template has never been loaded, so lets load it...
        else {  
            /*
            Note: Shell previously used jQuery's load method
            $().load() is a shorthand method roughly equivalent to $().get();
            except that it is a method rather than global function and it has an implicit callback function.
            $().get() is shorthand method for:
            $.ajax({
                url: url,
                data: data,
                success: success,
                dataType: dataType
            });            
            // I just like how this format gives us greater flexibility in configuring the ajax call
            */
           
            $.ajax({ 
                url : template.file,
                dataType : 'text' 
            })
            // run this when ajax is successful
            .done(function( data, textStatus, jqXHR ){
                // done loading, notify subscribers
                handler.fireEvent('load-complete');
                
                if ( window.console ) {
                    console.log('ajax success');
                }
                
                // pre-compile handlebars template
                var handlebarTemplate = Handlebars.compile( data );
                
                // store handlebar template for future use
                _templates[template.name] = handlebarTemplate;
                
                // generate Page
                handler.currentKey = key;
                handler.currentType = template.name;
                generatePage( handlebarTemplate, pageData, template, parentSelector );
                if ( isFunction( callback ) ) {
                    callback();
                }
            })
            // run this when the ajax fails
            .fail(function( jqXHR, textStatus, errorThrown){
                if ( window.console ) {
                    console.log('ajax failed: ' + textStatus + ", " + errorThrown );
                }
                alert('Error: AJAX Failure. Page template could not be loaded');
            })
            // always run this when ajax is complete
            .always(function(){
                if ( window.console ) {
                    console.log('AJAX complete');
                }
            });
        }
    }
    
    function generatePage( handlebarTemplate, pageData, template, parentSelector ) {
        // run template pre-load code
        template.onPreLoadPage();
        handler.fireEvent('page-preload');
        
        // append html to page
        $(parentSelector).append( handlebarTemplate( pageData ) );
        handler.fireEvent('page-appended');
        
        // run template post-load code
        template.onPostLoadPage();         
        handler.fireEvent('page-postload');
        
        // and we're all done...
        handler.fireEvent('page-ready');   
    };
    
    return handler;
    
}( PageHandler || new EventDispatcher() )); // extend the existing PageHandler or use a new EventDispatcher instance
