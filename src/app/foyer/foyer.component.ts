// foyer.component.ts

import { Component, OnInit } from '@angular/core';
import { FoyerService } from '../foyer.service';
import { Foyer } from './foyer.model';
import { ModifierFoyerComponent } from './modifier-foyer/modifier-foyer.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit {
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService, private dialog: MatDialog) {}

  ngOnInit() {
    this.chargerFoyers();
  }

  chargerFoyers() {
    this.foyerService.getFoyers().subscribe(
      data => {
        console.log('Données reçues du service', data);
        this.foyers = data;
      },
      error => console.error('Erreur dans la récupération des foyers', error)
    );
  }

  ajouterFoyer(nouveauFoyer: Foyer) {
    this.foyerService.ajouterFoyer(nouveauFoyer).subscribe(
      response => {
        console.log('Foyer ajouté avec succès', response);
        // Mettez à jour la liste des foyers après l'ajout
        this.chargerFoyers();
      },
      error => console.error("Erreur dans l'ajout du foyer", error)
    );
  }

  supprimerFoyer(idFoyer: number) {
    this.foyerService.supprimerFoyer(idFoyer).subscribe(
      () => {
        console.log('Foyer supprimé avec succès');
        // Mettez à jour la liste des foyers après la suppression
        this.chargerFoyers();
      },
      error => console.error("Erreur dans la suppression du foyer", error)
    );
  }

  
}