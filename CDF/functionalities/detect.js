var Detect = (function( detect ) {
    /** @exports detect as Detect */
    
    /**
     * Boolean indicating if the page is running on a server 
     */
    detect.isServer = false;
    /**
     * Boolean indicating if the page is running on the local file system 
     */
    detect.isStandalone = false;
    /**
     * Boolean indicating if the PhoneGap/Cordova API is available 
     */
    detect.isPhoneGap = false;
    /**
     * Boolean indicating if the page is running from a destkop browser 
     */
    detect.isDesktop = false;
    /**
     * Boolean indicating if the page is running on a mobile device 
     */
    detect.isMobile = false;
    /**
     * Boolean indicating if the page is running from an Android device 
     */
    detect.isAndroid = false;
    /**
     * Boolean indicating if the page is running from an iOS Device 
     */
    detect.isIOS = false;
    
    /**
     * Method which runs all checks 
     */
    detect.checkAll = function() {
        this.checkLocal();
        this.checkIOS();
        this.checkAndroid();
        this.isServer = !this.isStandalone;
        this.isMobile = this.isAndroid || this.isIOS;
        this.isDesktop = !this.isMobile;
    }
    
    /**
     * Detect if the course is running locally or on the server 
     */
    detect.checkLocal = function() {
        switch(window.location.protocol) {
           case 'http:':
           case 'https:':
             this.isStandalone = false;
             break;
           case 'file:':
             this.isStandalone = true;
             break;
           default: 
             this.isStandalone = true;
        }
    }
    
    /**
     * Detect if the PhoneGap Framework is present.
     * Useful for JKO M-Learning as it adds this dynamically to the package 
     */
    detect.checkPhoneGap = function() {
        if ( typeof(PhoneGap) != "undefined" ) {
            this.isPhoneGap = true;
        }
    }
    
    /**
     * Detect if running on an Android Device
     */
    detect.checkAndroid = function() {
        if ( navigator.appVersion.indexOf("Android") != -1 ) {
            this.isAndroid = true;
        }
    }
    
    /**
     * Detect if running on an iOS Device 
     */
    detect.checkIOS = function() {
        if ( navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1 || navigator.appVersion.indexOf("iPad") != -1 ) {
            this.isIOS = true;
        }
    }
    
    // run one check at creation
    detect.checkAll();
    
    return detect;
}( Detect || {} ));
