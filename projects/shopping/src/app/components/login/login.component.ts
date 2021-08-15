import { Component } from "@angular/core";
import { CaptchaService } from "../../services/captcha.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{

  code:any;

  constructor(private captcha:CaptchaService){
    this.code = this.captcha.GenerateCode();
  }

  onRefreshClick(){
    this.code = this.captcha.GenerateCode();
  }

    title:string = "User Login";
}
