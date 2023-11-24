

import { Component, OnInit } from '@angular/core';
import { FoyerService } from '../foyer.service';


@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit {
  foyers: any[]=[];

  constructor(private foyerService: FoyerService) {}

  ngOnInit() {
    this.foyerService.getFoyers().subscribe(
      data => {
        console.log('Données reçues du service', data);
        this.foyers = data;
      },
      error => console.error('Erreur dans la récupération des foyers', error)
    );
  }
}
