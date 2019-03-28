import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// Plugins imports 
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HTTP } from '@ionic-native/http/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    ImagePicker,
    BatteryStatus,
    SQLite,
    Camera,
    Geolocation,
    FingerprintAIO,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
