import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usernameSecret: string = "diop";
  private passSecret: string = "passer";
  constructor() { }
  connexion(username:string,pass:string){
    if(username.toLowerCase()===this.usernameSecret && pass.toLowerCase()===this.passSecret){
      localStorage.setItem("isConnect","true");
    }else{
      localStorage.setItem("isConnect","false");
    }
  }
}
