import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Post={
    mensaje: '',
    coords: null,
    posicion: false
  }
  temImages: string[]=[];
  cargandoGelolializacion=false;

  constructor(private postsrv: PostsService,
              private navCtr: NavController,
              private geoCtr: Geolocation ) {}

  async crearPost(){
    
    const creado=await this.postsrv.crearPost(this.Post); 
    
    if (creado){
      this.Post={
        mensaje: '',
        coords: null,
        posicion: false
      };
      
      this.navCtr.navigateRoot('/main/tabs/tab1' )
    }

  }


  geoLoca(){
    
    
    if (!this.Post.posicion ){
        this.Post.coords=null;
        this.cargandoGelolializacion=false;
        return ;  //salimos
    }

    this.cargandoGelolializacion=true;


      this.geoCtr.getCurrentPosition().then(resp=>{

        this.cargandoGelolializacion=false;
        const coords=`${resp.coords.latitude},${resp.coords.longitude}`;
        console.log('Cor',coords);
        this.Post.coords=coords;
        console.log('Post: ',this.Post);
        
      }).catch(error => {
        console.log('error geolcation');
        this.cargandoGelolializacion=false;
      })
      

  }
  





}
