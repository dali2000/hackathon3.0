import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  user = {
    email: '',
    password: '',
    cin: '',
    type: 'owner',
    lastName: '',
    firstName: '',
    phone: '',
    status: "active"

  }
  addSyndic() {
    this.http.post('http://localhost:3000/api/auth/register', this.user).subscribe(
      res => {
        console.log(res)
      });
  }

}
