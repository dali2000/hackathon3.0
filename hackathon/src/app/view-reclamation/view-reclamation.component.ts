import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reclamation',
  templateUrl: './view-reclamation.component.html',
  styleUrls: ['./view-reclamation.component.css']
})
export class ViewReclamationComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getReclamation()
  }
  token = localStorage.getItem('token')
  // set token  in headers 
  
  headers = new HttpHeaders({
    'authorization':  localStorage.getItem('token'),
  })


  headersE = new HttpHeaders({
    'authorization':  localStorage.getItem('token'),
  })
    reclamation :any

  getReclamation(){
    this.http.get("http://localhost:3000/api/auth/myReclamations",{headers:this.headers}).subscribe(res=>{
      console.log(res);
      this.reclamation = res;
    
  });
  }
delete(id:any){

console.log(this.headers)

  this.http.post("http://localhost:3000/api/auth/cancelReclamation/"+id,{headers:this.headersE}).subscribe(res=>{
    console.log(res);
    this.getReclamation();
});
}
  

  
}
