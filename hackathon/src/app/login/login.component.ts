import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }
  
   user = {
    email:"",
    password:""
  }
  password :"";
  email:"";
  data:any;
  token:any;
  user1:any
  login(){
    this.http.post("http://localhost:3000/api/auth/login",this.user).subscribe(res=>{
      this.data = res;
      console.log(this.data);
      this.token = this.data.token;
      // localStorage.setItem('token',this.token);
      this.user1 = jwtDecode(this.token);
      console.log(this.user1.user);
    })
    if(this.token == null){
      this.router.navigate((['/Login']))
  
    }else{
      localStorage.setItem('token',this.token);
      if(this.user1.user.type=="admin")
      this.router.navigate((['/Home_admin']))
      else if(this.user1.user.type=="owner"){
        this.router.navigate((['/ouwnerAceuil']))
      }
    }
  }
  ngOnInit(): void {

  }

}
