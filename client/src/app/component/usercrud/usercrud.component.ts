// src/app/usercrud/usercrud.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrls: ['./usercrud.component.css'],
})
export class UsercrudComponent {
  UserArray: any[] = [];
  currentUserID = '';
  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(private userService: UserService) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((resultData: any) => {
      console.log(resultData);
      this.UserArray = resultData.data;
    });
  }

  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentUserID = data._id;
  }

  updateRecords() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    this.userService.updateUser(this.currentUserID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert('User Updated');
      this.getAllUsers();
    });
  }

  setDelete(data: any) {
    this.userService.deleteUser(data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert('User Deleted');
      this.getAllUsers();
    });
  }

  save() {
    if (this.currentUserID === '') {
      this.register();
    } else {
      this.updateRecords();
    }
  }

  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };
    this.userService.createUser(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert('User Registered Successfully');
      this.name = '';
      this.address = '';
      this.phone = '';
      this.getAllUsers();
    });
  }
}
