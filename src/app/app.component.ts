import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-webvview';
  token = ''

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  injectFromAngularToReactNative(){
    window.ReactNativeWebView.postMessage('Esto es desde la Angular');
  }
}
