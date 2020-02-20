var SCOLoader = (function(loader){ // Pass in the SCOLoader Object, which is an instance of EventDispatcher
    var _prevSco = null;
    var _currSco = null;
    
    loader.loadSCO = function( scoId ) {
        if ( shell.isBusy ) {
            setTimeout(function(){ SCOLoader.loadSco(scoId); }, 10);
        }
        
        // Stop if the sco is already loaded
        if ( scoId === _currSco ) {
            this.fireEvent('sco-ready');
            return;
        }
        
        // save last sco id loaded
        _prevSco = _currSco;
        
        // When there was already a SCO loaded, save its data
        if ( _prevSco != null && _prevSco != undefined ) {
            this.saveSCO(_prevSco);
        }
        
        // start loading sco
        //console.log('loading a new sco');
        
        // set current sco
        shell.currSCO = scoId;
        
        // get content data
        window.myContentData = new ContentObject( scoId );
        
        // get tracking data
        window.shell.tracking = SCOData[scoId].tracking;
        
        // re-initialize the menu;
        initMenu();
        
        // Load the saved course completion
        loadSave( window.shell.tracking.pageCompletion );
        
        // when score data does not exist
        if ( SCOData[scoId].tracking.pageScores === null || SCOData[scoId].tracking.pageScores === '' ) {
            initializePageScores();
        }
        
        // determine which page to load, first page in SCO or last saved page:
        var lastPage = myMenuData.firstSCOPage;
        if ( window.shell.tracking.currPageId ) {
            var loadLastPage = confirm('Do you wish to return the last page you visited?');
            if ( loadLastPage ) {
                $('#shell-splash').hide();
                loadPageAudio();
                lastPage = window.shell.tracking.currPageId;
            }
        }
        
        // load page
        loadPage( lastPage );
        
        // set curr sco
        _currSco = scoId;
        setBookmark( scoId );
        
        // publish ready event
        this.fireEvent('sco-ready');
    };
    
    loader.saveSCO = function( scoId ) {
        //SCOData[scoId].tracking = window.shell.tracking; 
    };
    
    loader.loadSave = function( save ) {
        var temp, tracking;
        // Go through every SCO and reload the tracking data
        for ( var key in save.sco ) {
            if ( SCOData.hasOwnProperty(key) ) { // This line is a Fix for older versions of IE
                SCOData[key].tracking.pageCompletion = save.sco[key].pc;
                SCOData[key].tracking.pagesVisited   = save.sco[key].pv;
                SCOData[key].tracking.pageScores     = save.sco[key].ps;
                SCOData[key].tracking.currPageId     = save.sco[key].cp;
            }
        }
        shell.branchStartPages.BSPObject      = save.bsp;
        shell.branchStartPages.BSPInitObject  = save.bspi;
        shell.branchStartPages.BSPReqObject   = save.bspr;
		console.log(shell.branchStartPages.BSPObject);
    };
    
    loader.createSave = function() {
        // make sure we have the latest data for the current sco
        this.saveSCO( _currSco );
        
        // start a new save object:
        var save = new Object();
        save.sco = new Object();
        
        // Go through every SCO
        // NOTE: using abbreviated attributes to save on character space in the final string-ified object.
        var temp, tracking;
        for ( var key in SCOData ) {
            if ( SCOData.hasOwnProperty(key) ) { // This line is a Fix for older versions of IE
                // grab sco tracking data
                tracking = SCOData[key].tracking 
                // build save object
                temp = new Object();
                temp.pc   = tracking.pageCompletion;
                temp.pv   = tracking.pagesVisited;
                temp.ps   = tracking.pageScores;
                temp.cp   = tracking.currPageId;
                // store
                save.sco[key] = temp;
            }
        }
        
        save.bsp  = shell.branchStartPages.BSPObject;
        save.bspi = shell.branchStartPages.BSPInitObject;
        save.bspr = shell.branchStartPages.BSPReqObject;
        
        // keep track of the course version
        save.ver = shell.course.version;
        // keep track of current sco
        save.loc = shell.currSCO;
        
        return save;
    };
    
    return loader;
    
}( SCOLoader || new EventDispatcher() ));
