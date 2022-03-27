import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-syndics',
  templateUrl: './list-syndics.component.html',
  styleUrls: ['./list-syndics.component.css']
})
export class ListSyndicsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllSyndics();
  }
  list:any
  syndics :any
  getAllSyndics(): void {
    this.http.get("http://localhost:3000/api/admin/getSyndics").subscribe(res => {
      this.syndics = res
      this.list = this.syndics.user
      console.log(this.list)
    })
    let img = "http://localhost:3000/assets/"
  }

}
