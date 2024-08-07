import { Component } from '@angular/core';
import { ItemCardComponent } from "../../components/item-card/item-card.component";
import { TagsComponent } from "../../components/tags/tags.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [ItemCardComponent, TagsComponent, CommonModule]
})
export class ProjectsComponent {

  constructor() {

  }

  projectList: Array<projectInterface> = [
    {
      title: "Pokémon: Pokédex",
      img: "../../../assets/imgs/cursedKieran.jpg",
      desc: "Uma pokédex pokémon que exibe todos os pokémons de todas as gerações",
      tags: [
        {title: 'Inspirado'}, {title: 'C#'}, {title: 'HTML'}, {title: 'CSS'}, {title: 'Javascript'}, {title: 'Angular'}, {title: 'Front-end'},  {title: 'API'},
      ]
    }
  ]
}

interface tagInterface {
  title: string,
}

interface projectInterface {
  title: string,
  img?: string,
  desc: string,
  tags: Array<tagInterface>
}
