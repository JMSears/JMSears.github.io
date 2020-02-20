
var DialogHelper = (function(dialog){
    var num = 0;
    
    var linkArr = new Array();
    var popupArr = new Array();
    var heightArr = new Array();
    var widthArr = new Array();
    var atArr = new Array();
    var myArr = new Array();
    var ofArr = new Array();
    
    dialog.init = function() {
        for ( var i = 0; i < num; i++ ) {
            setupDialog(i);
        }
    }
    
    dialog.add = function( linkName, popupName, width, height, positionMy, positionAt, positionOf ) {
        num++;
        var i = linkArr.length
        linkArr[i]  = linkName;
        popupArr[i] = popupName;
        widthArr[i] = width || 650;
        heightArr[i]= height || 400;
        atArr[i]    = positionAt || null;
        myArr[i]    = positionMy || null;
        ofArr[i]    = positionOf || null;
    };
    
    dialog.length = function() { return num; }
    
    function setupDialog(i) 
    {
        var height = heightArr[i];
        var width  = widthArr[i];
        var my = myArr[i];
        var at = atArr[i];
        var of = ofArr[i];
        $("#" + popupArr[i] ).dialog({
            autoOpen    : false,
            resizable   : true,
            width       : width,
            minHeight   : 120,
            height      : height,
            dialogClass : 'fbpop',
            open        : function() {
                //$(this).css("maxHeight", 400);
                //$("#click" + i + "Text").focus();
                //$('.ui-dialog').find('div').first().find('a').first().attr("tabindex", 0);
                if ( my != null && at != null && of != null )
                $( this ).dialog("widget").position({
                    my: my,
                    at: at,
                    of: $("#" + of)
                });
            },
            close: function() {
                var i = popupArr.indexOf( $(this).id );
                $("#" + linkArr[i] ).focus();
            }
        });
        
        if ( atArr[i] != null && myArr[i] != null ) {
            $("#" + popupArr[i] ).dialog("widget").position({
                my: myArr[i],
                at: atArr[i],
                of: $("#" + ofArr[i])
            });
        }
        
        $("#" + linkArr[i] ).click(function(){
            DialogHelper.open(i);
            return false;
        });
        
        $("#" + linkArr[i] ).keyup(function(event) {
            if (event.which == '13') {
                DialogHelper.open(i);
            }
            return false;
        });
    }
    
    dialog.open = function(i) {
        for ( var j = 1; j <= num; j++ ) 
        {
            if ( $('#' + popupArr[j] ).dialog('isOpen') ) {
                $('#' + popupArr[j] ).dialog('close');
            }
        }
        $('#' + popupArr[i]).dialog('open');
    }
    
    return dialog;
}(DialogHelper || {}));