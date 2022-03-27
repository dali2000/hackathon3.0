import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  user:any;
  user1:any;
  token:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user = jwtDecode(this.token);
    console.log(this.user.user);
    this.user1= this.user.user;
  }
  id:any
  owner:any
  getSyndicProfil(){
    this.http.get("http://localhost:3000/api/admin/getSyndic/"+this.user1._id).subscribe(res => {
      this.owner= res
      console.log(this.owner)
    })
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/Login'])
  }

}
