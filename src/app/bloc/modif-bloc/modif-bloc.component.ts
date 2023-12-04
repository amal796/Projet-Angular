import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Bloc } from 'src/app/Model/Bloc';
import { CrudService } from 'src/app/Services/CrudBloc';

@Component({
  selector: 'app-modif-bloc',
  templateUrl: './modif-bloc.component.html',
  styleUrls: ['./modif-bloc.component.css']
})
export class ModifBlocComponent {
  id: number
  BlocForm: FormGroup

  constructor(private services: CrudService, private router: Router, private fb: FormBuilder, private toast: NgToastService, private route: ActivatedRoute) {
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


  ngOnInit(): void {
    let idEvent = this.route.snapshot.params['id'];
    this.id = idEvent;

    this.services.findBlocById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.BlocForm.patchValue({
        nomBloc: event.nomBloc,
        capaciteBloc: event.capaciteBloc,
        Foyer: event.Foyer,


      });
    });
  }

  updateBloc() {
    let data = this.BlocForm.value;

    let bloc = new Bloc(
      this.id,
      data.nomBloc,
      data.capaciteBloc,
      data.Foyer,

    );
    console.log(bloc);
    console.log(data);
    this.services.updateBloc(this.id, bloc).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/Bloc'])

    });
  }

}
