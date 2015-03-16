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
 
function submitForm() { 
  var req = createXhrObject(); 
  if (null == req) return ;
  req.onreadystatechange = function() { 
      //alert (req.readyState);
     if(req.readyState == 4){
        if(req.status == 200){
          document.getElementById("dyn").value=req.responseText;   
        } else {
          alert("Error: returned status code " + req.status + " " + req.statusText);
        }   
     } 
  }; 
  req.open("POST", "data.php", true); 
  req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  user = "Jean-jean est un ... "; 
  passwd = "nounours!!!";
  req.send("user="+user+"&passwd="+passwd); 
  req.send(null); 
} // submitForm
 
function initButton() {
    var bouton = document.getElementById('button');
    initEventHandlers(bouton, 'click', submitForm);
}    
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} 
 
initEventHandlers(window, 'load', initButton);
