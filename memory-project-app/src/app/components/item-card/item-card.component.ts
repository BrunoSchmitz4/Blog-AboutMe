import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import * as fs from 'fs';
// import * as path from 'path';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

  cardIdIdentifier = document.getElementById('project');
  typeOfCard = "";

  isProject = false;
  isContact = false;

  cardHeaderContent: Array<itemCardHeader> = [
    {
      header_title: 'Gato de Schrodingër'
    }
  ];
  cardMainContent: Array<itemCardMain> = [
    {
      main_span: 'Ele está vivo ou morto?',
      main_img: 'Missing img file!'
    }
  ];
  cardFooterContent: Array<itemCardFooter> = [
    {
      footer_span: 'Saiba Mais!'
    }
  ]


  itemCardsProject: Array<itemCardProject> = [
    {
      img: '../../../assets/imgs/goodKids.png',
      tlt: 'Good Kid',
      dsc: 'Uma banda conhecida por transformar sons de Jazz em música, vida e arte.',
      alt: 'uma banda muito legal!'
    },
    {
      img: '../../../assets/imgs/Meghan-Trainor.jpg',
      tlt: 'Meghan Trainor',
      dsc: 'Meghan Elizabeth Trainor é uma cantora, compositora e produtora norte-americana.',
      alt: 'Ela cantou em Smurfs!'
    },
    {
      img: '../../../assets/imgs/Snivy.jpg',
      tlt: 'Snivy PokéBot',
      dsc: 'Um projeto de desenvolvimento de bot para servidor de Discord, tematizado com Snivy.',
      alt: 'Snivy é o meu pokémon favorito!'
    },
  ];

  itemCardsContact: Array<itemCardContact> = [
    {
      img: '../../../assets/imgs/githubImgAccount.png',
      dsc: 'Bruno_Ss (BrunoSchmitz4)',
      lnk: 'https://github.com/BrunoSchmitz4',
      alt: 'Conta GitHub',
      banner: '../../../assets/imgs/gihubbanner.jpeg',
    },
    {
      img: '../../../assets/imgs/githubImgAccount.png',
      dsc: 'Bruno_Ss (BrunoSchmitz4)',
      lnk: 'https://github.com/BrunoSchmitz4',
      alt: 'Conta GitHub',
      banner: '../../../assets/imgs/gihubbanner.jpeg',
    },
    {
      img: '../../../assets/imgs/githubImgAccount.png',
      dsc: 'Bruno_Ss (BrunoSchmitz4)',
      lnk: 'https://github.com/BrunoSchmitz4',
      alt: 'Conta GitHub',
      banner: '../../../assets/imgs/gihubbanner.jpeg',
    }
  ]

  constructor() {}

  public cardsTheme(option: string) {
    option.toLowerCase;
    if(option == "Projetos") {
      this.isProject = true;
      return true;
    }
    if(option == "Contatos") {
      this.isContact = true;
      return true;
    }
    return false
  }

  /** Exibe os cards se há os dados */
  public getItemCards() {
    if(this.itemCardsProject.length >= 1 && this.isProject) return true;
    if(this.itemCardsContact.length >= 1 && this.isContact) return true;
    return false;
    // this.itemCards.forEach(item => {
    //   if(item.img && item.alt && item.dsc) return true;
    //   return false;
    // });
  }

  public hasHeader() {
    // if (this.cardIdIdentifier.toLowerCase() == 'project') return true;
    // return false;
    return true
  }

  public hasMain(): boolean {
    // if (this.cardIdIdentifier.toLowerCase() == 'project') return true;
    // return false;
    return true
  }

  public hasFooter() {
    if (this.cardIdIdentifier?.nodeValue == 'project') return true;
    return false;
  }
}

interface itemCardProject {
  img: string,
  tlt: string,
  dsc: string,
  alt: string,
}

interface itemCardContact {
  img: string,
  dsc: string,
  lnk: string,
  alt: string,
  banner: string,
}

interface itemCardHeader {
  header_title?: string
}

interface itemCardMain {
  main_span?: string,
  main_img?: string,
}

interface itemCardFooter {
  footer_span?: string,
}
