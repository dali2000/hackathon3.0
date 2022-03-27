import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  user = {
    email: '',
    password: '',
    cin: '',
    type: 'resident',

  }
  register() {
    this.http.post('http://localhost:3000/api/auth/register', this.user).subscribe(
      res => {
        console.log(res)
      });
  }
}
