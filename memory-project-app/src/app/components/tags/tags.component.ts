import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  template: '<li>{{ dadoRecebido }}</li>',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  @Input() dadoRecebido: string = "";
}
