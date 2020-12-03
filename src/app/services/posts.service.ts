import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts } from '../interfaces/interfaces';


const URL=environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost=0;

  constructor(private http: HttpClient) { }

  getPost(pull: boolean=false){

    if (pull) {
        this.paginaPost=0;
    }
    this.paginaPost++;
    return this.http.get<RespuestaPosts>(`${URL}/posts?pagina=${this.paginaPost}`);

  } 







}
