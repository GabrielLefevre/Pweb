// calculatrice.js
var decalage = 0;
var nbBout;	  
var timer;

function menu(nb)
{
 var angle = 360 / nb;		
 nbBout = nb;
 var posX;
 var posY;
 var rayon = 60;
 var centreX = document.getElementById("centre").offsetLeft;
 var centreY = document.getElementById("centre").offsetTop;
 var lItem = 20;
 var i = 1;
 var item;
 var b;
 
for(b = 0; b < 360; b += angle)
 {		  
  posX = centreX + 25 + rayon * Math.cos(b * Math.PI / 180);
  posY = centreY + 25 + rayon * Math.sin(b * Math.PI / 180); 
  
  item = document.getElementById("item" + i);
  item.className = "item";	
  item.style.top = (posY - lItem / 2) + "px"; 
  item.style.left = (posX - lItem / 2) + "px";
  i++;
 }
}

function anim()
{		  
 decalage++;
 var angle = 360 / nbBout;		
 var posX;
 var posY;
 var rayon = 70;
 var centreX = document.getElementById("centre").offsetLeft;
 var centreY = document.getElementById("centre").offsetTop;
 var lCentre = 50;
 var lItem = 20;
 var i = 1;
 var item
 var b;

 for(b = 0; b < 360; b = b + angle)
 {		  
  posX = centreX + 25 + rayon * Math.cos((b + decalage) * Math.PI / 180);
  posY = centreY + 25 + rayon * Math.sin((b + decalage) * Math.PI / 180); 
  
  item = document.getElementById("item" + i);
  item.style.top = (posY - lItem / 2) + "px"; 
  item.style.left = (posX - lItem / 2) + "px";
  i++;
 }	
}

function modeCalculatrice (mode) {
  alert("Mode : "+mode);
}

            function resultat() {
                var z = document.getElementById('z');
                z.value = eval(z.value);
            }
 
            function touche(t) {
                var z = document.getElementById('z');
                z.value += t;
            }
 
            function special(nom) {
                var z = document.getElementById('z');
                var val = eval(z.value);
                var fct = 'Math.' + nom;
                z.value = eval(fct + '(' + val + ')');
            }

function initButton() {
    var btn1 = document.getElementById('modeClassique');
    initEventHandlers(btn1, 'click', function() {modeCalculatrice(0);});
    var btn2 = document.getElementById('modeScientifique');
    initEventHandlers(btn2, 'click', function() {modeCalculatrice(1);});
} // initButton
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} // observe

function modeCalculatrice (mode) {
    var body = document.getElementsByTagName('body').item(0);  //reférence le noeud body    
    var nodeDiv = document.createElement('DIV');               //création d'un noeud contenant une balise DIV
    nodeDiv.setAttribute("id","resultat");                     //initialisation de l'attribut id 
    nodeDiv.setAttribute("class","resultat-classique");
    body.appendChild(nodeDiv);                                 // On insère le noeud en tant que dernier fils de body
 
}

function coucou () {
  alert ("Akeu coucou !");
}
function ajouterBouton () {
    // cette fonction peut par exemple être appelée lorsqu'on clique sur le bouton scientifique ...
    var nodeDiv = document.getElementById('resultat');  //reférence le noeud div resultat 
    var carre = document.createElement('INPUT');        // création d'un bouton
	var sqrt = document.createElement('INPUT');
	
     carre.setAttribute("type","button");              
     bouton.setAttribute("value","²");
     
     sqrt.setAttribute("type","button");              
     bouton.setAttribute("value","sqrt");
 
     initEventHandlers(bouton, 'click', coucou);       // associe la fonction coucou au clic de la souris
     nodeDiv.appendChild(bouton);                      // On insère le noeud en tant que dernier fils de nodeDiv
     
     initEventHandlers(carre, 'click', special(sqrt));
     nodeDiv.appendChild(<sqrt);
}

function modeSc() {
	ajouterBouton();
}


initEventHandlers(window, 'load', initButton);
timer = setInterval("anim()",50);
