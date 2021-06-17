import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateuserService } from '../services/authenticateuser.service';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {

  Username = '';

  constructor(private route:Router, private serv: AuthenticateuserService) { }

  ngOnInit(): void {
    this.Username = this.serv.getTheUserLoggedIn();
  }

}
