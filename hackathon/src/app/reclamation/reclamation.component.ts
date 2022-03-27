import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamation = {
    description: '',
    pics: [],
    //priority: '',
   
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }
// add token to headers


// Language: typescript


token = localStorage.getItem('token')
// set token  in headers 
headers = new HttpHeaders({
  'authorization':  localStorage.getItem('token'),
})
  
  Reclamation() {

    this.http.post('http://localhost:3000/api/auth/reclamation',this.reclamation,{headers:this.headers}).subscribe(
      res => {
        console.log(res)
      });
      console.log(this.headers)

  }
}
