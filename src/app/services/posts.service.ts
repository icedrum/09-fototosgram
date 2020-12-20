import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Post, RespuestaPosts } from '../interfaces/interfaces';
import { UsuariosService } from './usuarios.service';


const URL=environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost=0;

  nuevoPost= new EventEmitter<Post>();

  constructor(private http: HttpClient,private  usuSrv: UsuariosService) { }

  getPost(pull: boolean=false){

    if (pull) {
        this.paginaPost=0;
    }
    this.paginaPost++;
    console.log('Pag',this.paginaPost);
    
    return this.http.get<RespuestaPosts>(`${URL}/posts?pagina=${this.paginaPost}`);
  } 

  crearPost(post){


    const headers=new HttpHeaders({
      'x-token': this.usuSrv.token
    })
   


    return new Promise(resolve =>{


      this.http.post(`${URL}/posts`,post,{headers})
      .subscribe ( resp => {
        
        console.log('respuesta: ',resp);
        if (resp['ok']){
            this.nuevoPost.emit(resp['post']);
            resolve(true)
        }else {
          resolve(false)
        }
    })



    })
    






  }

}
