import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeComponent } from "./liste/liste.component";
import { AddComponent } from './add/add.component';
import { Teach } from './teach.model';
import { LayoutComponent } from "./composants/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeComponent, AddComponent,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formation Angular';
  
}
