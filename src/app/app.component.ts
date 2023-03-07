import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Gender', url: '/people', icon: 'person' },
    { title: 'Age', url: '/age', icon: 'accessibility' },
    { title: 'Country', url: '/country', icon: 'earth' },
    { title: 'Weather', url: '/weather', icon: 'cloud' },
    { title: 'Contact Me', url: '/about', icon: 'person-add' },
  ];
  constructor() {}
}
