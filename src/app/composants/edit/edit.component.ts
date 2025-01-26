import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  private route = inject(ActivatedRoute);
    constructor(){
   
      console.log("Bienvenu dans la page edit");
      this.route.paramMap.subscribe(mesParamettres =>{
        const myID = mesParamettres.get("id")
        console.log(`Son id est ${myID} et son type est : `,typeof(myID));
      })
    }
}
