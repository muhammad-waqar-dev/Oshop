import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
user:firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user=>this.user=user);
   }

  logout(){
    this.afAuth.auth.signOut();
  }

}
