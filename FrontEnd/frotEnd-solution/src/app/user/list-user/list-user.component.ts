import { Component } from '@angular/core';
import { UserDataService } from '../user.dataservice';
import { Router } from '@angular/router';
import { GridService } from 'src/app/services/grid.service';
import { UserDTO } from '../user.dto';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  providers: [UserDataService, GridService, ToastrService]
})
export class ListUserComponent {
  constructor(
    private router: Router,
    public userDataService: UserDataService,
    public gridService: GridService<UserDTO>,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.userDataService.getAll()
      .subscribe(response => this.atualizarGrid(response));
  }

  private atualizarGrid(data: any) {
    this.gridService.setDataSource(data);
  }

  public create(): void {
    this.router.navigateByUrl('/create-user');
  }
  public edit(element: any) {
    this.router.navigate(['/edit-user', element.idUsuario]);
  }

  public delete(element: any) {
    let user: User = new User();
    user.IdUsuario = element.idUsuario;
    user.nome = element.nome
    user.sobreNome = element.sobreNome;
    user.email = element.email;
    user.dataNascimento = new Date(element.dataNascimento);
    user.IdEscolaridade = element.idEscolaridade;
    this.userDataService.delete(user)
      .subscribe(
        () => { this.deleteCallback(); },
        error => {
          this.toastr.error('Algo deu errado.');
        }
      );


  }

  private deleteCallback() {
    this.userDataService.getAll()
      .subscribe(response => this.atualizarGrid(response));
    this.toastr.success('Usuário excluido com sucesso!');
  }
}
