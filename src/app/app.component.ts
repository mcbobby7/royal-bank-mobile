import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    StatusBar.setOverlaysWebView({ overlay: false });
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Light });
    };
    setStatusBarStyleDark();
    StatusBar.setBackgroundColor({
      color: '#ffffff',
    });
  }

  ngOnInit() {}
}
