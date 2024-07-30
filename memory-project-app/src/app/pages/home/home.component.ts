import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, FooterComponent, ItemCardComponent, ProjectsComponent, ContactComponent, CommonModule]
})
export class HomeComponent {

  cardHeaderContent: Array<homeCard> = [
    {src: '#', dsc: 'Teste', anchor: '#'},
    {src: '#', dsc: 'Teste', anchor: '#'},
    {src: '#', dsc: 'Teste', anchor: '#'},
    {src: '#', dsc: 'Teste', anchor: '#'},
  ];
}

interface homeCard {
  title?: string;
  src?: string;
  dsc?: string;
  anchor?: string;
}
