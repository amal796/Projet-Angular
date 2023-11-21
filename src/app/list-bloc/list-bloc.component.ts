import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from '../Model/Bloc';
import { CrudService } from '../Services/CrudBloc';

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent {
  listBlocs: Bloc[]
  numberOfBlocs: number = 0

  constructor(private service: CrudService, private router: Router) { }

  onDeleteBloc(bloc: Bloc) {
    if (confirm("Voulez vous supprimer ce bloc ?")) {

      this.service.deleteBloc(bloc.idBloc).subscribe(() => {
        this.router.navigate(['/ListBloc']).then(() => {
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {

    this.service.getBlocs().subscribe(blocs => {
      this.listBlocs = blocs

      this.numberOfBlocs = blocs.length
      console.log(blocs)
    })
  }
}
