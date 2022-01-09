import { Categorie } from "./categorie.model";

export class Produit { 
    idProduit : number | undefined; 
    nomProduit : string | undefined; 
    prixProduit : number | undefined; 
    dateCreation : Date | undefined ; 
    categorie: Categorie = new Categorie;
}