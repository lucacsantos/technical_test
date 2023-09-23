import { Component, ViewChild } from '@angular/core';
import { UserDataService } from '../user.dataservice';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseDTO } from 'src/app/services/response.dto';
import { UserDTO } from '../user.dto';
import { FormUserComponent } from 'src/app/user/form-user/form-user.component';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [UserDataService, ToastrService]
})
export class CreateUserComponent {
  @ViewChild(FormUserComponent, { static: true }) public formUserComponent!: FormUserComponent;
  public userForm!: FormGroup;

  constructor(
    private router: Router,
    private userDataService: UserDataService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.userForm = this.formUserComponent.createFormGroup();
  }
  private mapToDto(controls: any): User {
    let user: User = new User();
    user.nome = this.formUserComponent.controls.nome.value;
    user.sobreNome = this.formUserComponent.controls.sobreNome.value;
    user.email = this.formUserComponent.controls.email.value;
    user.dataNascimento = new Date(this.formUserComponent.controls.dataNascimento.value);
    user.IdEscolaridade = this.formUserComponent.controls.escolaridadeId.value;

    return user;
  }
  
  public onSubmit() {
    if (!this.onValidSubmit(this.userForm.controls)) {
      this.toastr.error("Informe os campos corretamente!")
      return;
    }
    this.userDataService.create(this.mapToDto(this.userForm.controls)).subscribe(
      response => this.createCallbackSuccess(response), error => this.createCallbackError(error));
  }

  public onCancel() {
    this.router.navigateByUrl('/');
  }

  public onValidSubmit(controls:any) {
    return (controls.nome.value != "" && controls.sobreNome.value != "" &&
    controls.email.value != "" && controls.dataNascimento.value != "" && 
    controls.escolaridadeId.value != "")
  }

  private createCallbackSuccess(response: ResponseDTO) {
    this.toastr.success('Usuário incluido com sucesso!');
    this.router.navigateByUrl('/');
  }

  private createCallbackError(error: any): any {
    this.toastr.error('Error ao inserir o usuário!');
  }
}
