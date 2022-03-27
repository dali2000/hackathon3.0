import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-syndic-owner',
  templateUrl: './add-syndic-owner.component.html',
  styleUrls: ['./add-syndic-owner.component.css']
})
export class AddSyndicOwnerComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  user = {
    email: '',
    password: '',
    cin: '',
    type: 'syndic',
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
