import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCVxz7Uo-fhTLMm7qNv2A3x6bGTa9Wtqt4",
      authDomain: "ng-recipe-db-2c541.firebaseapp.com"
    });
  }


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
