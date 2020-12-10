import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuariosService } from '../../services/usuarios.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit  {

  @ViewChild('slidePpal') slidePpal: IonSlides;


  loginUser={
    email:'icedrum2004@gmail.com',
    password:'123456'
  };


  registrUser={
    email:'icedr4@gmail.com',
    password:'123456',
    nombre: 'dav',
    avatar: 'av-1.png'
  };
  
  constructor(private usaruiservcio: UsuariosService,
             private navCtrl :  NavController,
             private uiservice:UiServiceService
    ) { }



  ngOnInit() {
    
  }
  
  
  
  ngAfterViewInit(){
    this.slidePpal.lockSwipes( true );
  }


  async login(fLogin: NgForm){
    
    if (fLogin.invalid){return};
    
    const valido=await this.usaruiservcio.login(this.loginUser.email,this.loginUser.password);
    
    if(valido){
      console.log (valido);
      this.navCtrl.navigateRoot('/main/tabs/tab1',{animated:true})
    }else {
      this.uiservice.aletaInformativa('Usuario / pass incorrecto')
    }

  }

  async resgistro(fRegis:NgForm){
    if (fRegis.invalid){return};

    const valido=await this.usaruiservcio.registroUsario(this.registrUser );
    
    if(valido){
      this.navCtrl.navigateRoot('/main/tabs/tab1',{animated:true})
    }else {
      this.uiservice.aletaInformativa('Ese correo electronico ya existe')
    }


  }


  SolapaRegis(){
    this.moverSlide(1)
  };
  SolapaLogin(){
    this.moverSlide(0)
  };
  moverSlide(Cual: number){
    this.slidePpal.lockSwipes( false );
    this.slidePpal.slideTo(Cual);
    this.slidePpal.lockSwipes( true );
  }




}
