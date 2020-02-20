(function (root, factory) {
    //if (typeof define === 'function' && define.amd) {
    //    // AMD. Register as an anonymous module.
    //    define(['jQuery'], function ( $ ) {
    //        // Also create a global in case some scripts need it
    //        return (root.loadingScreen = factory($));
    //    });
    //} else {
        // Browser globals
        root.loadingScreen = factory( root.jQuery );
    //}
}(this, function ( $, undefined ) {
    var loadingScreen = {};
    
    loadingScreen.message = function( str ){
        $('.preload-progress-text').html( str );
    };
    
    loadingScreen.show = function(){
        $('.preload-display').show();
    };
    
    loadingScreen.hide = function(){
        $('.preload-display').hide();
    };
    
    return loadingScreen;
}));
