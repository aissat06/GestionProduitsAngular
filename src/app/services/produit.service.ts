import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits : Produit[]; //un tableau de Produit
  produit : any;
  categories: Categorie[]; // un tableau de categorie
  categorie : any;

  constructor(private router: Router) { 

    //initialiser le tableau catégorie
    this.categories = [
      {idCat : 1, nomCat : "PC"}, 
      {idCat : 2, nomCat : "Imprimante"}
    ];

    //initialiser le tableau produit
    this.produits = [ 
      {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}}, 
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}}, 
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"), categorie : {idCat : 1, nomCat : "PC"}} 
    ];
  }

  listeProduits():Produit[] {
    return this.produits;
  }

  ajouterProduit( prod: Produit){
    this.produits.push(prod);
    
  }

  supprimerProduit(prod: Produit) { 
    //supprimer le produit prod du tableau produits 
    const index = this.produits.indexOf(prod, 0); 
    if (index > -1){ 
      this.produits.splice(index, 1); 
    } 
    //ou Bien 
    /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) { 
        this.produits.splice(index, 1); 
      } 
    }); */ 
  }

  consulterProduit(id:number): Produit {
    
    this.produit = this.produits.find(p => p.idProduit == id);
    return this.produit;
  }

  trierProduits() { 
    this.produits = this.produits.sort((n1: any, n2: any) => { 
      if (n1.idProduit  > n2.idProduit) { 
        return 1; 
      } 
      if (n1.idProduit < n2.idProduit) { 
        return -1; 
      } 
      return 0; 
    });
  }

  updateProduit(p: Produit){
    // console.log(p);
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }

  listeCategories():Categorie[] { 
    return this.categories; 
  }

  consulterCategorie(id:number): Categorie{ 
    this.categorie = this.categories.find(cat => cat.idCat == id); 
    return this.categorie; 
  }
}
