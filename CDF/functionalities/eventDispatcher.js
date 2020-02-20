/**
 * @file houses the EventDispatcher Class. Based on a Publish/Subscribe variation of the Objeserver Design Pattern.
 * @author Valerie Burzynski <vburzynski@adayana.com>
 * @version 0.1.0
 * @history (2012.XX.XX) VRB - Initial Version (JS ADEN)
 * @history (2013.04.17) VRB - Integrated into HTML5 Shell
 */
var EventDispatcher = Class.extend(
/** @lends EventDispatcher.prototype */
{
    /**
     * Parent Object (which is also an EventDispatcher)
     * @default null 
     */
    parent: null,
    
    /**
     * Event Dispatcher
     * @class Creates a class of objects capable of firing events
     * @augments Class
     * @constructs
     */
    init: function() {
        this._listeners = new Object();
    },
    
    /**
     * Identifies object as event dispatcher
     */
    isEventDispatcher: true,
    
    /**
     * object containing all event listener callback functions
     */
    _listeners: null,
    
    /**
     * Destory object
     */
    destroy: function() {
        // TODO : Clear all listeners
        // delete this._listeners; // is this sufficient?
    },
    
    /**
     * Add new Event Listener
     */
    addEventListener: function( eventType, listener ) {
        // Check to see if the eventType is registered on this object yet.
        if (typeof this._listeners[eventType] == "undefined") {
            this._listeners[eventType] = new Array;
        }
        // Add Listener
        if ( this._listeners[eventType].indexOf(listener) == -1 ) {
            this._listeners[eventType].push(listener);            
        }
    },
    
    /**
     * Remove event listener
     */
    removeEventListener: function( eventType, listener ) {
        if ( eventType in this._listeners ) {
            var eventListeners = this._listeners[eventType];
            var index = eventListeners.indexOf(listener);
            
            if ( index == -1 )
                return false
            
            eventListeners.splice(index,1);
            return true;
        } else {
            return false;
        }
    },
    
    /**
     * Fire an Event
     * @param {String|Object} event - A string or object designating the event to fire.
     */
    fireEvent: function( event ) {
        // TODO : implement stopPropagation.
        // TODO : add event.cancelable to prevent cancellation of certain events.
        
        // Exit when no listeners exist
        if ( !this._listeners ) {
            return;
        }
        
        // Run check on arguments
        try {
            if ( arguments.length < 1 ) 
                throw "noEventDefined";
            else if ( !is("String", event) && !is("Object", event )) 
                throw "invalidEvent";
            if ( is("Object", event) && !event.type )
                throw "noEventType";
        } catch(er) {
            switch ( er ) {
                case "noEventDefined" : 
                    console.error('Object is unable to fire event. Event was not designated.');
                    break;
                case "invalidEvent" :
                    console.error('parameter "event" must be a string or event object');
                    break;
                case "noEventType" :
                    console.error('event does not have a type.');
                    break;
                default :
                    console.error(er);
            }
            return false;
        }
        
        // Create event object when string is passed as the event parameter
        if ( is("String", event) ) {
            var str = event;
            event = new Object();
            event.type = str;
        }
        
        // set target
        if ( !event.target ) {
            event.target        = this; // set the (original) target, that which fired the event
            event.currentTarget = this; // set the last object to bubble the event
        }
        else {
            event.currentTarget = this; // set the last object to bubble the event
        }
        
        // Fire Event
        if ( event.type in this._listeners ) {
            var eventListeners = this._listeners[event.type];
            
            if ( eventListeners == undefined ) 
                return false;
            
            // queue all the callbacks (in case of removal of event listeners during processing )
            var callbackList = new Array();
            for ( var i=0; i<eventListeners.length; i++) {
                if ( eventListeners[i] == undefined ) 
                    continue;
                callbackList.push( eventListeners[i] );
            }
            
            for ( var i=0; i<callbackList.length; i++) {
                callbackList[i]( event );
            }
        }
        
        // Event Bubbling.
        // bubble when event.bubbling == true; the parent is set; the parent is an event dispatcher; and the parent contains the fireEvent method
        if ( event.bubbles && this.parent && this.parent != null && this.parent.isEventDispatcher && this.parent.fireEvent ) {
            this.parent.fireEvent(event);
        }
    }
});