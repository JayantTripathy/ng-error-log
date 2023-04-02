import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-a',
  templateUrl: './product-a.component.html',
  styleUrls: ['./product-a.component.css']
})
export class ProductAComponent {
  users = new Array<any>();

  constructor(public userService: UserService) { }

  ngOnInit(): void { }
  throwError1() {
    throw Error('The product component-A has thrown an error!');
  }
  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response.data;
      console.log(this.users);
    });
  }
}
