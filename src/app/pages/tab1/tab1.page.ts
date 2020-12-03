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

  constructor(private postservice: PostsService) {}

  ngOnInit(){
    this.siguientes(,false);
  }

  recargar(event){
    //vacio post
    this.posts=[];
    this.siguientes(,true);
  } 

  siguientes(event? , pull: boooean=false ){

    this.postservice.getPost()
      .subscribe(res => {
        this.posts.push(...res.posts);        
      


        if (event){
          event.target.complete(); 
          if (res.posts.length===0){
            event.target.disabled=true;
            console.log('cero');
            
          }

        }
      });
  }




}
