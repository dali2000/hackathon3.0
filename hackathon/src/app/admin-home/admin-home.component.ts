import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.getAllResidences()
  }
  residences:any
  getAllResidences(){
    this.http.get('http://localhost:3000/api/admin/allResidence').subscribe(
      res => {
        
        this.residences = res
        console.log(this.residences.residences)
      });
  }

}
