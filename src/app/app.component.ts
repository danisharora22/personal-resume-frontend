import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personal Resume';
  
  navItems = [
    { path: '/profile', label: 'Profile', icon: 'fa-user' },
    { path: '/education', label: 'Education', icon: 'fa-graduation-cap' },
    { path: '/experience', label: 'Experience', icon: 'fa-briefcase' },
    { path: '/skills', label: 'Skills', icon: 'fa-code' },
    { path: '/projects', label: 'Projects', icon: 'fa-folder-open' }
  ];
}
