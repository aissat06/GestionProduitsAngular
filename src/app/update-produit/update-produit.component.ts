import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new Produit();
  categories: Categorie[] = [];
  updatedCategorie: Categorie = new Categorie;

  // Permet d'accéder aux informations sur un route associé à un composant chargé dans une prise.
  constructor(private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.categories = this.produitService.listeCategories(); 
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentProduit);
  }


  updateProduit() {
    // console.log(this.currentProduit);
    this.updatedCategorie = this.produitService.consulterCategorie(this.currentProduit.categorie.idCat);
    this.currentProduit.categorie = this.updatedCategorie;
    this.produitService.updateProduit(this.currentProduit);
    // revenir à la page qui liste les produits
    this.router.navigate(['produits']);
  }

}
