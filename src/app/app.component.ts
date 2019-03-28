import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from './../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  fpm: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HTTP
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log('Platform.ready(): ', readySource)
      console.log(window)
      // App is initialized here !
      this.fpm = window['FirebasePlugin']


      // Only enable in production environent 
      // envrionment variable is set to normal or prod during compile-time 
      if (environment.production) {
        console.log('--prod mode')
        this.fpm.setPerformanceCollectionEnabled(true)
        this.fpm.setAnalyticsCollectionEnabled(true)
  
        /*this.fpm.startTrace('platform_ready_to_first_page', success => {
          console.log(success)
        }, error => {
          console.log(error)
        })*/  
      } else {
        console.log('normal mode')
      }


      this.makeHttpRequest()
    });
  }

  makeHttpRequest() {
    console.log('HTTP-Request try new request')
    const url = `https://plugins-494d4.firebaseio.com/test/${window["device"].manufacturer}\name.json`

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "/json-handler";
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
          console.log('HTTP-Request Sent successfully')
      }
  }
    
    xmlhttp.send(JSON.stringify( window['device'] ));
  }
}
