function selectionner () {
    var node = document.getElementById("liste");
    var options= node.value.split(' ');   // options est un tableau contenant les valeurs servant à l'auto-complétion
    $( "#tags" ).autocomplete({
              source: options
    });
 
}
function createXhrObject(){
    if (window.XMLHttpRequest)
        return new XMLHttpRequest();
 
    if (window.ActiveXObject){  
        var names = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP",
                      "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0"];
        for(var i in names){
            try{ return new ActiveXObject(names[i]); }
            catch(e){}
        }
    }
    window.alert("pas de prise en charge de XMLHTTPRequest.");
    return null; // non supporte
} 
 
function initButton() {
    var bouton = document.getElementById('button');
    initEventHandlers(bouton, 'click', selectionner);
}    
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} 
 
initEventHandlers(window, 'load', initButton);
