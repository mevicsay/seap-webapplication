import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null, Validators.required)
  });
  constructor(private _router:Router, private _user:UserService) { }

  ngOnInit() {
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data); this._router.navigate(['/home']);} ,
      error=>console.error(error)
    )
    //console.log(JSON.stringify(this.loginForm.value));
  }

  moveToRegister() {
    this._router.navigate(['/register']);
  }


  clearForm(){
    this.loginForm.reset();
  }


}
