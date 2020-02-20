var debug = (function(debug){
    
    var _dialog;
    
    debug.init = function() {
        _dialog = $('<div>Would you like to clear your save data?</div>');
        _dialog.appendTo('body');
        _dialog.dialog({
            resizable : false,
            height : 140,
            modal : true,
            autoOpen: false,
            title: "Hidden Menu",
            buttons : {
                "Clear all Data and reload" : function() {
                    $(this).dialog("close");
                    $(window).off('unload');
                    debug.clear();
                    window.location.reload();
                },
                Cancel : function() {
                    $(this).dialog("close");
                }
            }
        });
        _dialog.dialog('widget').addClass('ui-debug');
        // Modified to NOT use Esc, which is a reserved shortcut for Section 508 purposes.
		$(document).bind("keyup","ctrl+shift+space", function(e) {
			//console.log('pressed ' + keyId);
			_dialog.dialog('open');   
		});
		/*$(document).keydown( function( event ) {
            if(event.keyCode == 27) {  //escape key
                _dialog.dialog('open');        
            }
        });*/
    }; 
    
    debug.clear = function() {
        if ( STANDALONE ) {
            ShellStorage.flush();                     
        } else {
            setSaveData('');
        }
    };
    
    debug.show = function() {
        _dialog.dialog('open');
    };
    
    debug.hide = function() {
        _dialog.dialog('close');
    };
    
    return debug;
}( debug || {} ));