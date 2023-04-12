import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private http: HttpClient
  ) { }

  loginService(data: any){
    return this.http.post('https://reqres.in/api/login',data);
  }

  // getUsers() {
  //   return new Promise((resolve) => {
  //     let url = 'https://reqres.in/api/users';
  //     this.http.get(url).subscribe((res:any) => {
  //       console.log(res?.data); 
  //       resolve(res);
  //     })
  //   })
  // }

  
  getUsers(data:any) {
    return new Promise((resolve) => {
      let url = `https://reqres.in/api/users?page=${data}`;
      this.http.get(url).subscribe((res:any) => {
        console.log(res?.data); 
        resolve(res);
      })
    })
  }

  searchUsers(data:any) {
    return new Promise((resolve) => {
      let url = `https://reqres.in/api/users?id=${data}`;
      this.http.get(url).subscribe((res:any) => {
        console.log(res?.data); 
        resolve(res);
      })
    })
  }

}


