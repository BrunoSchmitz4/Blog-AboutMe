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

  typeOfCard = "";

  isProject = false;
  isContact = false;


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

  // public getItemCardsImg(): string[]{
  //   let folderPath = '../../../assets/imgs/';
  //   try {
  //     const files = fs.readdirSync(folderPath);
  //     const imageFiles = files.filter((file) => {
  //         const extension = path.extname(file).toLowerCase();
  //         return ['.jpg', '.jpeg', '.png', '.gif'].includes(extension);
  //     });
  //     return imageFiles;
  //   } catch (error) {
  //       console.error('Error reading folder:', error);
  //       return [];
  //   }

  // }

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
