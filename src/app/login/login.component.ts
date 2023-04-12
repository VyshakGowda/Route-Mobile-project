import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GlobalService } from '../global.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  constructor(
    private globalService: GlobalService,
    private route: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  submit() {
    let obj = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.globalService.loginService(obj).subscribe((res: any) => {
      console.log(res);
      if (res.token) {
        localStorage.setItem('token', res?.token);
        this.route.navigate(['user']);
      }else {
        alert('Error')
      }
    },error=>{
      console.log(error);
      this.openDialog()
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px'
    });
    

    dialogRef.afterClosed().subscribe((result) => { });
  }

}
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}