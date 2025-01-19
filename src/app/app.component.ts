import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeComponent } from './liste/liste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teach';
}
