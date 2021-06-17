import { candidate } from './../models/ICandidate';
import { Component, OnInit } from '@angular/core';
import { AuthenticateuserService } from '../services/authenticateuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username = '';
  password = '';
  _candidates: Array<candidate> = [];
  _invalid = false;
  constructor(private route:Router, private serv: AuthenticateuserService) { }

  ngOnInit(): void {  
  }

  CheckUser(){
      this.serv.getAllUsers().subscribe(result => {
      this._candidates = result;

      var searchUser = result.find(x => x.Username === this.Username && x.password === this.password);
      if(searchUser != null){
          console.log("Found!");
          sessionStorage.setItem('Username', this.Username);
          this.route.navigate(['/assessments']);
          this._invalid = false;
      }
      else{
        console.log("Not Found!");
        this._invalid = true;
     }

    },(error) => {console.log(error);});

  }

}
