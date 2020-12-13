import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{

  constructor(private ususerv: UsuariosService,private uiservice: UiServiceService) {}

  usuario; Usuario={};


  ngOnInit(){
    this.usuario=this.ususerv.getUsuario();

  }

  logout(){
    
  }

  async actualizarUsu(fActua: NgForm){

    if (fActua.invalid) {return; }

    const actualizado=await this.ususerv.actualizarUsuario(this.usuario);
  
    if (actualizado){
      this.uiservice.aletaInformativa("Usuario actualizado");
      
    }
  
  }
}
