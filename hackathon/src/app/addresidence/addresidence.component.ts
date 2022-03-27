import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresidence',
  templateUrl: './addresidence.component.html',
  styleUrls: ['./addresidence.component.css']
})
export class AddresidenceComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
