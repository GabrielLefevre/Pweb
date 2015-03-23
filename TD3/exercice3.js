function selectionner (choix) {
//var node = document.getElementById("liste");
var options= choix.split(':'); // options est un tableau contenant les valeurs servant à l'auto-complétion
$( "#ville" ).autocomplete({
source: options
});
return options.length;
}
function trimChoix(mot){ //supprimer les " : "
var retour = mot.replace(":","");
return retour;
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
function recupListeVilles(codePostal) {
var req = createXhrObject();
if (null == req) return ;
req.onreadystatechange = function() {
// alert (req.readyState);
if(req.readyState == 4){
if(req.status == 200){
if (0==req.responseText.length) alert ('le code '+codePostal+" n'existe pas");
else {
//alert('réponse du serveur :'+req.responseText);
var tab = selectionner(req.responseText);
if(tab == 2){
document.getElementById("ville").value=trimChoix(req.responseText);
}
}
} else {
alert("Error: returned status code " + req.status + " " + req.statusText);
}
}
};
req.open("POST", "exerccie3-traitement.php", true);
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.send('code='+codePostal);
} // submitForm
function saisir () {
var texte = document.getElementById('code');
var nb=texte.value.length;
if (nb>4)recupListeVilles(texte.value);
else alert ('format code postal incorrect !')
}
function initButton() {
var texte = document.getElementById('code');
initEventHandlers(texte, 'blur', saisir);
}
function initEventHandlers(element, event, fx) {
if (element.addEventListener)
element.addEventListener(event, fx, false);
else if (element.attachEvent)
element.attachEvent('on' + event, fx);
}
initEventHandlers(window, 'load', initButton);
