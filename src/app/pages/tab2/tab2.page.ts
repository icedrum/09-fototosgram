import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Post={
    mensaje: '',
    coord: null,
    posicion: false
  }

  constructor(private postsrv: PostsService,
              private navCtr: NavController) {}

  async crearPost(){
    
    const creado=await this.postsrv.crearPost(this.Post); 
    
    if (creado){
      this.Post={
        mensaje: '',
        coord: null,
        posicion: false
      };
      
      this.navCtr.navigateRoot('/main/tabs/tab1' )
    }

  }

}
