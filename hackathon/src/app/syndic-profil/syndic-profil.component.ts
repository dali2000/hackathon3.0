import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-syndic-profil',
  templateUrl: './syndic-profil.component.html',
  styleUrls: ['./syndic-profil.component.css']
})
export class SyndicProfilComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
 id:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("_id");
      this.id = id

    });
    this.getSyndicProfil();
  }
  syndic :any 
  getSyndicProfil(){
    this.http.get("http://localhost:3000/api/admin/getSyndic/"+this.id).subscribe(res => {
      this.syndic = res
      console.log(this.syndic)
    })
  }

}
