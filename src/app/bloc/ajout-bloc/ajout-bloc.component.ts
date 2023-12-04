import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Bloc } from 'src/app/Model/Bloc';
import { CrudService } from 'src/app/Services/CrudBloc';

@Component({
  selector: 'app-ajout-bloc',
  templateUrl: './ajout-bloc.component.html',
  styleUrls: ['./ajout-bloc.component.css']
})
export class AjoutBlocComponent {
  BlocForm: FormGroup

  constructor(private services: CrudService, private router: Router, private fb: FormBuilder, private toast: NgToastService) {
    let formControls = {
      nomBloc: new FormControl('', [
        Validators.required,]),


      capaciteBloc: new FormControl('', [
        Validators.required,]),
      Foyer: new FormControl('', [
        Validators.required,]),


    }
    this.BlocForm = this.fb.group(formControls)
  }
  get nomBloc() { return this.BlocForm.get('Bloc'); }
  get capaciteBloc() { return this.BlocForm.get('capaciteBloc'); }
  get Foyer() { return this.BlocForm.get('Foyer'); }


  addNewBloc() {
    let data = this.BlocForm.value;
    console.log(data);
    let bloc = new Bloc(
      undefined, data.nomBloc, data.capaciteBloc, data.Foyer);
    console.log(bloc);

    if (
      data.nomBloc == 0 ||
      data.capaciteBloc == 0
      // ||
      //  data.Foyer == 0
    ) {
      this.toast.info({
        detail: ' Message d erreur',
        summary: 'Remplir votre champs',
      });
    } else {
      this.services.addBloc(bloc).subscribe(
        res => {
          console.log(res);
          this.toast.success({
            detail: 'Succes Message',
            summary: 'Bloc ajoutée',
          });

          this.router.navigate(['/Bloc']);
        },
        err => {
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Probléme de Serveur',
          });
        }
      )

    }
  }

}
