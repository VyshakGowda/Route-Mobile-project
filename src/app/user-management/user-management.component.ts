import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  usersList: any[] = [];
  count = 1;
  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.getUserInfo(this.count);
  }

  getUserInfo(data:any) {
      this.globalService.getUsers(data).then((res:any) => {
        console.log(res);
        this.usersList = res?.data;
      });
  }

  searchCat(e:any) {

    const input: string = e.target.value;
    this.usersList = [];
    this.globalService.searchUsers(input).then((res:any) => {
      if (input) {
        this.usersList.push(res?.data);
      } else {
        this.getUserInfo(this.count);
      }
    });
  }
  
  counter(type:boolean) {
    if (type) {
      this.count = this.count + 1;
      this.getUserInfo(this.count);
    } else {
      this.count = this.count - 1;
      this.getUserInfo(this.count);
      if (this.count < 1) {
        this.count = 1;
      }
    }
  }

}
