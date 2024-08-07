import { Component } from '@angular/core';
import { ItemCardComponent } from "../../components/item-card/item-card.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [ItemCardComponent]
})
export class ProjectsComponent {

}

interface tagInterface {
    title: string
}