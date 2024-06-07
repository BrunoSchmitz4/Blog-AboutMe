import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, HeaderComponent, ProjectsComponent, ContactComponent, ItemCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memory-project-app';

  constructor() {

  }

  public darkModeTheme(isDark: boolean) {
    if(isDark) {
      console.log("Dark mode activaded.");
    }
    console.log("Dark mode desactivaded.");
  }
}
