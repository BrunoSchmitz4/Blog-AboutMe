import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fs from 'fs';
import * as path from 'path';

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
      dsc: 'GoodKids',
      alt: 'uma banda muito legal!'
    },
  ];

  constructor() {
    const imgs = this.getItemCardsImg();
  }

  /** Exibe os cards se há os dados */
  public getItemCards() {
    this.itemCards.forEach(item => {
      if(!item.dsc || !item.img || !item.alt) return false;
      return true;
    });
  }

  public getItemCardsImg(): string[]{
    let folderPath = '../../../assets/imgs/';
    try {
      const files = fs.readdirSync(folderPath);
      const imageFiles = files.filter((file) => {
          const extension = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif'].includes(extension);
      });
      return imageFiles;
    } catch (error) {
        console.error('Error reading folder:', error);
        return [];
    }

  }

}

interface itemCard {
  img: string,
  dsc: string,
  alt: string,
}
