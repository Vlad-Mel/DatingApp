import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string = 'The Dating App';
  fetchUrl : string = 'https://localhost:5001/api/users'
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     this.getUsers();
  }

  getUsers() {
    this.http.get(this.fetchUrl)
    .subscribe( response => {
      this.users = response
      console.log(this.users);
    }, error => {
      console.log(error)
    });
  }
}
