function confirmer_envoi()
{
	var mail = document.getElementById("mail").value;
	alert("Voulez-vous vraiment envoyer ce message avec l'adresse " +mail + " ?");
}

function hideHobby()
{
	var classe = document.getElementById("exp_asso").className;

	if (classe == "trois_colonnes visible") 
	{
		document.getElementById("exp_asso").style.visibility = "hidden";
		document.getElementById("exp_asso").className = "trois_colonnes hidden";
	}
	if (classe == "trois_colonnes hidden") 
	{
		document.getElementById("exp_asso").style.visibility = "visible";
		document.getElementById("exp_asso").className = "trois_colonnes visible";
	}
}

function creer()
{
	var categorie = document.getElementById("categorie").value;

	var new_titre = document.getElementById("titre").value;
	var new_date = document.getElementById("date").value;
	var new_description = document.getElementById("description").value;


	var article = document.createElement("article");
	article.className = 'article_center';
	article.id = new_titre;

	var titre = document.createElement("h3");                 
	var contenu_titre = document.createTextNode(new_titre);

	var date = document.createElement("h4");                 
	var contenu_date = document.createTextNode(new_date);

	var texte = document.createElement("p");                 
	var contenu_texte = document.createTextNode(new_description);


	texte.appendChild(contenu_texte);
	date.appendChild(contenu_date);
	titre.appendChild(contenu_titre);  
	article.appendChild(titre);  

	document.getElementById(categorie).appendChild(article);
	document.getElementById(new_titre).appendChild(titre); 
	document.getElementById(new_titre).appendChild(date);  
	document.getElementById(new_titre).appendChild(texte);

	return false;

}