import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateuserService } from '../services/authenticateuser.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router, private serv: AuthenticateuserService) { }

  ngOnInit(): void {
     this.serv.LogUserOut();
    this.route.navigate(['login']);
  }

}
