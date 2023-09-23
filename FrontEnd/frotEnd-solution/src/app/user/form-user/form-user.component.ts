import { Component } from '@angular/core';
import { UserDataService } from '../user.dataservice';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
  providers:[UserDataService],
})

export class FormUserComponent {
  public userForm!: FormGroup;
  public controls: any;
  
  public constructor( private formBuilder: FormBuilder,
    public userDataService: UserDataService){

      this.userForm = this.formBuilder.group({
        usuarioId: [''],
        escolaridadeId: ['', Validators.required],
        nome: ['', [Validators.required, this.customeNameValidator]],
        sobreNome: ['', [Validators.required, this.customeLastNameValidator]],
        email: ['', [Validators.required, this.customeEmailValidator, Validators.email]],
        descricao: ['',],
        dataNascimento: ['', [Validators.required, this.customeAgeValidator]]
    });

    this.controls = {
      usuarioId: this.userForm.get('usuarioId'),
      escolaridadeId: this.userForm.get('escolaridadeId'),
      nome: this.userForm.get('nome'),
      sobreNome: this.userForm.get('sobreNome'),
      email: this.userForm.get('email'),
      descricao: this.userForm.get('descricao'),
      dataNascimento: this.userForm.get('dataNascimento')
    }
  }

  customeEmailValidator(control:any) : string {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
     if((control.value.length >=50) && control.touched)
      return 'Por favor, informe um email com no mínimo 5 caracteres e no máximo 50!';
    else if(!pattern.test(control.value) && control.touched)
      return 'Por favor, informe um email válido!';
      
      else {
        control.status = "VALID"
        return ''
      }
}

customeNameValidator(control:any) : string {
   if((control.value.length >=20) && control.touched)
    return 'Por favor, informe um nome com no máximo 20 caracteres';
   
    else {
      control.status = "VALID"
      return ''
    }
}

customeLastNameValidator(control:any) : string {
  if((control.value.length >=100) && control.touched)
   return 'Por favor, informe um sobrenome com no máximo 100 caracteres';
  
   else {
    control.status = "VALID"
    return ''
  }
}

customeAgeValidator(control:any) : string {

  var yearSelected = new Date(control.value).getFullYear();
  var currentYear = new Date().getFullYear();
  if(currentYear - yearSelected <= 15)
    return 'Idade deve ser maior que 15 anos.';

    else {
      control.status = "VALID"
      return ''
    }
}
  createFormGroup(): FormGroup{
    return this.userForm;
  }

}