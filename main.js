function produit (nom,prix) {
	this.nom=nom;
	this.prix=prix
}
function panier () {
	var priceHT=0;
	var priceTTC=priceHT+priceHT*5/100;
	this.ajouter = function (produit) {
		priceHT=priceHT+produit.prix;
		console.log(priceHT);
		priceTTC=priceHT+priceHT*5/100;
		console.log(priceTTC)
	}
	this.retirer= function(produit) {
		priceHT=priceHT-produit.prix;
		console.log(priceHT)
		priceTTC=Math.round((priceTTC-produit.prix*5/100-produit.prix)*100)/100;//2chiffres apres virgule max
		console.log(priceTTC)
	}
}
chocolat = new produit("chocolat",2);
eau = new produit("eau",1);
riz = new produit("riz",1);
kinder = new produit("kinder",5);
viande = new produit ("viande",10);
caddie = new panier();