// width de l'élément main
var main = document.getElementById("main");
var mainW = main.offsetWidth;

var artistes = document.getElementsByClassName("artiste");
var compteur = 0;
var abscisses = [];
var ordonnees = [];

for(i=0; i<artistes.length; i++){

	// on positionne les ressources aléatoirement sur l'axe x
	var x = (Math.random()*mainW);
	artistes[i].style.left = x+"px";
	// on les fait apparaître après un petit délai
	let artiste = artistes[i];
	setTimeout(()=>{
		artiste.style.opacity = 1;
	},300);
	
	if (window.matchMedia("(max-width: 660px)").matches){
		// on rompt tous les liens hypertextes
		var links = document.getElementById("main").getElementsByTagName("a");
		for (k=0; k<links.length; k++){
			links[k].classList.add("disabled");
		}
	}else{
		window.onresize = function(){
 			location.reload();
		}
	}

	// au clic sur les éléments
	artistes[i].addEventListener("click", function(e){
		compteur++;
		e.target.style.color = "var(--theme-color)";

		if (!window.matchMedia("(max-width: 660px)").matches){

			var id = e.target.id;
			var _close = function(){
				nameElt.classList.toggle("close");
				for(j=0; j<artistes.length; j++){
					artistes[j].style.opacity = 1;
					var test = artistes[j].classList.contains("disabled");
					if(test){
						artistes[j].classList.remove("disabled");
					}
				}
			}
		
			var nameElt = document.getElementById("boite-"+id);
			if (nameElt!== null){
				nameElt.classList.toggle("close");
				for(j=0; j<artistes.length; j++){
					artistes[j].style.opacity = 0;
					artistes[j].classList.add("disabled");
				}

				nameElt.addEventListener("click", _close, {once:true});
			}

		}
		else{
			var clicked = e.target.getElementsByTagName("a");
			if(clicked.length!==0){
				clicked[0].style.color ="var(--theme-color)";
			}
		}
		
		var positionInfo = e.target.getBoundingClientRect();

		var artisteW = e.target.offsetWidth/2;
		var artisteH = e.target.offsetHeight/2;

		var artiste = {
			x : positionInfo.left + artisteW,
			y : positionInfo.top + artisteH
		};
		
		abscisses.push(artiste.x);
		ordonnees.push(artiste.y);

		if(compteur > 1){
 			document.getElementById("main").insertAdjacentHTML("afterBegin", '<svg><line x1="'+abscisses[compteur-2]+'" y1="'+ordonnees[compteur-2]+'" x2="'+abscisses[compteur-1]+'" y2="'+ordonnees[compteur-1]+'" style="stroke:rgb(255, 125, 24);stroke-width:1" /></svg>');
		}
	});
}