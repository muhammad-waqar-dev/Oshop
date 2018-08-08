import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
user$:Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$=afAuth.authState;
   }

  logout(){
    this.afAuth.auth.signOut();
  }

}
