import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : Produit[]; //un tableau de produit

  constructor(private produitService: ProduitService) {

    this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
  }

  supprimerProduit(p: Produit){
    //console.log(p);
    let conf = confirm("Etes-vous sur de vouloir supprimer le produit:  " + p.nomProduit );
    if (conf)
      this.produitService.supprimerProduit(p);
  }

}
