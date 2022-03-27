import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
@Component({
  selector: 'app-add-residences',
  templateUrl: './add-residences.component.html',
  styleUrls: ['./add-residences.component.css']
})
export class AddResidencesComponent implements OnInit {

  Residence = {
    Label:null,
    adresse:null,
    NAppartement: null,
    owner:null,
    date:null,
    id:null
  }
  

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  addResidences(){
    this.http.post('http://localhost:3000/api/admin/addResidence',this.Residence).subscribe(
      res => {    
        console.log(res)
      });
  }


}
