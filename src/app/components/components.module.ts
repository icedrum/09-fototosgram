import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarselectorComponent } from './avatarselector/avatarselector.component';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    AvatarselectorComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ] ,
  exports:[    
    PostsComponent,
    AvatarselectorComponent
  ]
})
export class ComponentsModule { }
