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

  itemCards: Array<itemCard> = [
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
  ];

  constructor() {
    // const imgs = this.getItemCardsImg();
  }

  /** Exibe os cards se há os dados */
  public getItemCards() {
    if(this.itemCards.length >= 1) return true;
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

interface itemCard {
  img: string,
  tlt: string,
  dsc: string,
  alt: string,
}
