import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/interfaces';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  posts: Post[]=[]; 

  mip: Post;
  usu: Usuario;

  constructor(private postservice: PostsService) {}

  ngOnInit(){
    this.postservice.getPost()
      .subscribe(res => {
      //  this.posts.push(...res.posts);
      //  console.log(res.posts[0].usuario);        
      });
      
      


        //this.mip._id ="1";
        //this.mip.coords="0,0";
        //this.mip.created="0101";
        //this.mip.mensaje="Hoooola";
        //this.usu.nombre="Daviiiiiid";
        console.log(this.mip);
        //this.mip.usuario=this.usu;
        this.posts.push(this.mip);



  }

}
