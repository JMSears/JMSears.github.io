var ShellStorage = (function( storage ){
    
    var _solution = 'cookies';

    storage.init = function() {
        if ( Detect.isStandalone && BrowserDetect.browser === "Explorer" && BrowserDetect.version >= 9 ) {
            _solution = 'cookies';
        } 
        // use jStorage (LocalStorage and UserData APIs) in all other situations
        else {
            _solution = 'jStorage';
        }
    }
    
    storage.set = function( key, value ) {
        switch(_solution) {
            case 'cookies':
                Cookie.set( key, value );
                break;
            case 'jStorage':
                $.jStorage.set( key, value );
                break;
        }
    };
    
    storage.get = function( key, defaultValue ) {
        console.log("calling storage.get");
		console.log(_solution);
		switch(_solution) {
            case 'cookies':
                return Cookie.get( key, defaultValue );
                break;
            case 'jStorage':
                return $.jStorage.get( key, defaultValue );
                break;
        }
        return null;
    };
    
    storage.flush = function() {
        switch(_solution) {
            case 'cookies':
                Cookie.flush();
                break;
            case 'jStorage':
                $.jStorage.flush();
                break;
        }
    };
    
    storage.deleteKey = function( key ) {
        switch(_solution) {
            case 'cookies':
                Cookie.remove(key);
                break;
            case 'jStorage':
                $.jStorage.deleteKey( key );
                break;
        }
    };
    
    storage.index = function() {
        switch(_solution) {
            case 'cookies':
                return Cookie.index();
                break;
            case 'jStorage':
                return $.jStorage.index();
                break;
        }
        return [];
    };
    
    return storage;
}( ShellStorage || {} ));
