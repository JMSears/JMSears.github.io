/**
* preloadimages()
*
* preleoad an array or object full of image URI's
* and callback when they are all loaded with an
* array or object of `img` objects
*
* Author: Dave Eddy <dave@daveeddy.com>
* License: MIT
*/
function preloadimages(obj, cb) {
  var loaded = 0;
  var toload = 0;
  var images = obj instanceof Array ? [] : {};

  for (var i in obj) {
    toload++;
    images[i] = new Image();
    images[i].src = obj[i];
    images[i].onload  = load;
    images[i].onerror = load;
    images[i].onabort = load;
  }

  function load() {
    if (++loaded >= toload) cb(images);
  }
}

var ImagePreloader = EventDispatcher.extend({
    toload  : 0,
    done    : 0,
    success : 0,
    failure : 0,
    aborted : 0,
    images  : null,
    init: function( arr, completeFn ) {
        this._super();
        this.images = new Array();
        this.toload = arr.length;
        this.loadHandler = $.proxy( this.handleLoad, this);
        this.errorHandler = $.proxy( this.handleFailure, this);
        this.abortHandler = $.proxy( this.handleAbort, this);
        // start loading each image
        for ( var i = 0; i < this.toload; i++ ) {
            this._loadImage(arr[i]);
        };
        
        // if complete Fn is defined.
        if ( Utility.is('Function', completeFn) ) {
            this.addEventListener('complete', completeFn)
        }
    },
    _loadImage: function(url) {        
        var i = this.images.length;
        this.images[i] = document.createElement('img');
        this.images[i].onload  = this.loadHandler;
        this.images[i].onerror = this.errorHandler;
        this.images[i].onabort = this.abortHandler;
        this.images[i].src = url;
        $(this.images[i]).appendTo('#preload-space');
    },
    handleLoad: function(e) {
        //console.log('image loaded');
        this.success++;
        this.fireEvent('success');
        this.handleAll(e);
    },
    handleFailure: function(e) {
        //console.log('image failed to load');
        this.failure++;
        this.fireEvent('fail');
        this.handleAll(e);
    },
    handleAbort: function(e) {
        //console.log('image load aborted');
        this.abort++;
        this.fireEvent('abort');
        this.handleAll(e);
    },
    handleAll: function(e) {
        //console.log( this.done + ' out of ' + this.toload + 'loaded');
        this.done++;
        this.fireEvent('done');
        if ( this.toload === this.done ) {
            //console.log('all images loaded');
            this.fireEvent('complete');
        }
    }
});
