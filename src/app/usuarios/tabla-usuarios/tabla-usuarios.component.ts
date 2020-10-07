import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service'
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html'
  
})
export class TablaUsuariosComponent implements OnInit {

  users: any;

  constructor(private user: UserService) {
    this.user.getUsers().subscribe( users => {
      this.users = users;
      console.log(users);
      
    });
  }

  ngOnInit(): void {
  }

}
