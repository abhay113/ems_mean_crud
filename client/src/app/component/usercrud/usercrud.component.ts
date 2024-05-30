import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrl: './usercrud.component.css',
})
export class UsercrudComponent {
  apiUri: string = 'http://localhost:3000/api';

  UserArray: any[] = [];
  currentUserID = '';
  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(private http: HttpClient) {
    this.getAllUser();
  }
  getAllUser() {
    this.http.get(`${this.apiUri}/getAll`).subscribe((resultData: any) => {
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

  UpdateRecords() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    this.http
      .patch(`${this.apiUri}/update/` + this.currentUserID, bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('User Updateddd');
        this.getAllUser();
      });
  }

  setDelete(data: any) {
    this.http
      .delete(`${this.apiUri}/delete/` + data._id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('User Deletedddd');
        this.getAllUser();
      });
  }

  save() {
    if (this.currentUserID == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };
    this.http
      .post(`${this.apiUri}/create`, bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('User Registered Successfully');
        //this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.phone = '';
        this.getAllUser();
      });
  }
}
