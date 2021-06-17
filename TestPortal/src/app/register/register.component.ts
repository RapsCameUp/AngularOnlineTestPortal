import { candidate } from './../models/ICandidate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateuserService } from '../services/authenticateuser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:candidate = new candidate();

  constructor( private route:Router, private serv: AuthenticateuserService) { }

  ngOnInit(): void {
  }

  RegUser(){
    this.serv.RegisterNewUser(this.user).subscribe(result => {
      console.log("User Registered");
      this.route.navigate(['/login']);
    }, (error) =>{console.log(console.error);})
  }

}
