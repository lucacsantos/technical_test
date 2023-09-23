import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseDTO } from 'src/app/services/response.dto';
import { FormUserComponent } from '../form-user/form-user.component';
import { UserDataService } from '../user.dataservice';
import { User } from '../user';
import { formatDate } from '@angular/common'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [UserDataService, ToastrService]
})
export class EditUserComponent {
  @ViewChild(FormUserComponent, { static: true }) public formUserComponent!: FormUserComponent;
  public userForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userDataService: UserDataService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getUser(params['id']));
    this.userForm = this.formUserComponent.createFormGroup();
  }
  private getUser(IdUsuario: number) {
    this.userDataService.getById(IdUsuario).subscribe(response => this.getUserCallback(response));
  }

  private getUserCallback(data: any) {
    if (data != null) {

      this.userForm.controls['usuarioId'].setValue(data.idUsuario);
      this.userForm.controls['escolaridadeId'].setValue(data.idEscolaridade);
      this.userForm.controls['nome'].setValue(data.nome);
      this.userForm.controls['sobreNome'].setValue(data.sobreNome);
      this.userForm.controls['email'].setValue(data.email);
      this.userForm.controls['dataNascimento'].setValue(formatDate(data.dataNascimento, 'yyyy-MM-dd', 'en'));
      this.userForm.controls['descricao'].setValue(data.descricao);
    }
  }
  public onSubmit() {
    this.userDataService.update(this.mapToDto(this.userForm.controls)).subscribe(response => this.createCallback(response));
  }
  private createCallback(response: ResponseDTO) {
    this.toastr.success('Usuário alterado com sucesso!');
    this.router.navigateByUrl('/');
  }
  public onCancel() {
    this.router.navigateByUrl('/');
  }
  private mapToDto(controls: any): User {
    let user: User = new User();
    user.IdUsuario = controls.usuarioId.value;
    user.nome = controls.nome.value;
    user.sobreNome = controls.sobreNome.value;
    user.email = controls.email.value;
    user.dataNascimento = controls.dataNascimento.value;
    user.IdEscolaridade = controls.escolaridadeId.value;

    return user;
  }

}
