import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menu_icon = "../../../assets/imgs/MenuIcon.png"
  header_title = 'Memories, by Bruno';
  darkModeIcon = '../../../assets/imgs/moon.png';
  lightModeIcon = '../../../assets/imgs/sunIcon.png';
  ehDarkMode = false;
  navbar_icon = this.lightModeIcon;
  navbar_btn_Mode = 'navbar-btn-lightMode'

  isDesktop: boolean = true

  appScreen = window;

  anchors: Array<anchorInterface> = [
    {name: 'Home', href: 'home'},
    {name: 'Projeto', href: 'project'},
    {name: 'Contato', href: 'contact'},
  ];

  constructor() {
    this.anchors.forEach(anchor => {
      if(!anchor.href) anchor.class = 'nav-link disabled';
      else anchor.class = 'navbar-btn'
    });

    this.appScreen.addEventListener('resize', () => {
      if(this.appScreen.innerWidth <= 425) {
        this.isDesktop = false
      }
    })
  }



  switchMode() {
    this.ehDarkMode = !this.ehDarkMode;
    if (this.ehDarkMode == true) {
      this.navbar_icon = this.darkModeIcon;
      this.navbar_btn_Mode = 'navbar-btn-darkMode';
    }
      else {
        this.navbar_icon = this.lightModeIcon;
        this.navbar_btn_Mode = 'navbar-btn-lightMode'
      }
  }
}

interface anchorInterface {
  name: string;
  href: string;
  class?: string;
}
