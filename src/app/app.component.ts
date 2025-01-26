import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeComponent } from "./liste/liste.component";
import { AddComponent } from './add/add.component';
import { Teach } from './teach.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeComponent,AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formation Angular';
  v ="";
  compteur= 0;
  tab: Teach[] = [];
  constructor(){

    let teach = new Teach();
    teach.id=1;
    teach.nomComplet="Moustapha"
    this.tab.push(teach)
  }
  increment(){
    let newTeach = new Teach();
    newTeach.id = this.tab.length+1;
    newTeach.nomComplet = this.v;
    this.tab.push(newTeach);
  }
  supprimer(val:number){
    this.tab = this.tab.filter(item => item.id != val)
  }
}
