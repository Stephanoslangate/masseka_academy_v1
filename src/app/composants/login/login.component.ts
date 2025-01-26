import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private route = inject(Router);
  @Input() username = "";
  @Input() password = "";
  seConnecter(){
    this.loginService.connexion(this.username,this.password);
    if(localStorage.getItem("isConnect")==="true"){
      this.route.navigate(["/layout"])
    }else{
      this.route.navigate(["/login"])
    }
  }
}
