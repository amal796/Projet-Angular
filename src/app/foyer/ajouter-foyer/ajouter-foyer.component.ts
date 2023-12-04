// ajouter-foyer.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { Foyer } from '../foyer.model';

@Component({
  selector: 'app-ajouter-foyer',
  templateUrl: './ajouter-foyer.component.html',
  styleUrls: ['./ajouter-foyer.component.css']
})
export class AjouterFoyerComponent {
  @Output() foyerAjoute = new EventEmitter<Foyer>();

  nouveauFoyer: Foyer = { idFoyer: 0, nomFoyer: '', capaciteFoyer: null };

  ajouterFoyer() {
    this.foyerAjoute.emit(this.nouveauFoyer);
    this.nouveauFoyer = { idFoyer: 0, nomFoyer: '', capaciteFoyer: null }; // Réinitialisez pour le prochain ajout
  }
}
