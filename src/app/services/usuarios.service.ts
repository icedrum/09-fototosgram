import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';



const url= environment.url;
@Injectable({
  providedIn: 'root'
})


export class UsuariosService {

  token: string=null;

  private usuario: Usuario ={};

  constructor(private http: HttpClient, private storage: Storage, private navctr: NavController) {

   }




login(email: string , passw: string ){

  const data={email,password: passw}; 


  return new Promise( resolve => {

    this.http.post(`${url}/user/login`,data).subscribe(
      resp => {
          console.log(resp);
     
          if (resp['ok']){
            this.guardarToken(resp['token']);
            resolve (true);
          } else {
            this.token=null;
            this.storage.clear();
            resolve(false);
          }
      });


  })
}


registroUsario(usu: Usuario){

  return new Promise( resolve => {

    this.http.post(`${url}/user/create`,usu).subscribe(
      resp => {
          console.log(resp);
          if (resp['ok']){
             this.guardarToken(resp['token']);
             resolve (true);
           } else {
             this.token=null;
             this.storage.clear();
             resolve(false);
           }
      });


  })




}


getUsuario(){
  
  if (!this.usuario._id) {
      this.validaToken();
  }


  return {...this.usuario};
}


async guardarToken(token : string){
  this.token=token;
  await this.storage.set('token',token)
}


async cargarToken(){

    this.token=await this.storage.get('token') || null ;

   
  }


async validaToken():Promise<boolean>{

  
  

  await this.cargarToken();
 

  if (!this.token) {
    this.navctr.navigateRoot('/login');
    return Promise.resolve(false);
  };


 
  return new Promise<boolean>(resolve => {


    const headers=new HttpHeaders({
      'x-token': this.token
    })
   
    
    this.http.get(`${url}/user`,{headers})
    .subscribe ( resp => {
      
      console.log(resp);
      if (resp['ok']){
          console.log('Usu ok',resp['usuario']);
          this.usuario=resp['usuario'];
          resolve (true)
        } else {
          //this.navctr.navigateRoot('/login');
          resolve (false)
        }
    })
  })
}


actualizarUsuario(elusu: Usuario){
  const headers=new HttpHeaders({
      'x-token': this.token
  })


  return new Promise(resolve => {

    this.http.post(`${url}/user/update`,elusu,{headers})
      .subscribe ( resp => {
        
        console.log(resp);
        if (resp['ok']){
            this.guardarToken(resp['token']);
            resolve (true);    
          } else {
            //this.navctr.navigateRoot('/login');
            resolve(false);
          }
      })

  })






}





}
