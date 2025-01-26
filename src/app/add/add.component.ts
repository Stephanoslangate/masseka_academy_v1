import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input() nom="Diop";
  @Input() age= 10;
  compteur= 0;
  @Input() phoneNumber= "77830000";
  @Output() phoneNumberChange = new EventEmitter();
  @Output() informeParent = new EventEmitter();
  monStyle= "color:blue";
  avancer(){
    this.informeParent.emit();
  }
  valueToParent(val:string){
    this.phoneNumberChange.emit(val);
  }

}
