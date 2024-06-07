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

  header_title = 'Bruno Schmitz';
  darkModeIcon = '';

  anchors: Array<anchorInterface> = [
    {name: 'Projeto', href: 'project'},
    {name: 'Contato', href: 'contact'},
  ];

  constructor() {
    this.anchors.forEach(anchor => {
      if(!anchor.href) anchor.class = 'nav-link disabled';
      else anchor.class = 'nav-link'
    });
  }
}

interface anchorInterface {
  name: string;
  href: string;
  class?: string;
}
