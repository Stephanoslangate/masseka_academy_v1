import { Component } from '@angular/core';
import { Teach } from '../../teach.model';
import { AddComponent } from '../../add/add.component';
import { ListeComponent } from '../../liste/liste.component';
import { EditComponent } from '../edit/edit.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AddComponent,
    ListeComponent,
    EditComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

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
