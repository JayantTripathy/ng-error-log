import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-b',
  templateUrl: './product-b.component.html',
  styleUrls: ['./product-b.component.css']
})
export class ProductBComponent {
  users = new Array<any>();

  constructor(public userService: UserService) { }

  ngOnInit(): void { }
  throwError1() {
    throw Error('The product component- B has thrown an error!');
  }
  getUsers() {
    this.userService.getUsers1().subscribe(
      result => {
        // Handle result
        this.users = result.data;
        console.log(result)
      },
      error => {
        throw Error("There is some issues to communicate to API");
      });
  }
}
