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
 
function changeMessage (message) {
  //alert("changeMessage : "+ message);
  document.getElementById("message").value=message; 	

}
 
 
function submitForm(num) { 
  var req = createXhrObject(); 
  if (null == req) return ;
  req.onreadystatechange = function() { 
      //alert (req.readyState);
     if(req.readyState == 4){
        if(req.status == 200){
          alert(req.responseText);
          changeMessage(req.responseText);
        } else {
          alert("Error: returned status code " + req.status + " " + req.statusText);
        }   
     } 
  }; 
 

   req.open("POST", "traducteur.php", true);
   req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
   Français = "Bonjour";
   Anglais="Hello";
   Espagnol="Ola";
   if(num==1) {  changeMessage(Français); }
   if(num==2) {  changeMessage(Anglais);}
   if(num==3) {  changeMessage(Espagnol);}
   
  req.send(null); 
 
} // submitForm
 
function miseAJour () {
  var node = document.getElementById("ListeLangues"); 
  alert ("miseAJour");
  submitForm(node.value) 
  
	
}
 
function initButton() {
    var bouton = document.getElementById('ListeLangues');
    initEventHandlers(bouton, 'change', miseAJour);
}    
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} 
 
initEventHandlers(window, 'load', initButton);
