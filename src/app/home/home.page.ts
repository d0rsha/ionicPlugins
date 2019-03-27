import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private imagePicker: ImagePicker,
    private nativeStorage: NativeStorage,
    private sqlite: SQLite,
    private batteryStatus: BatteryStatus,
    private camera: Camera,


    ) { }

  ionViewDidEnter() {
    window['FirebasePlugin'].stopTrace('platform_ready_to_first_page')
  }
}
