import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarselectorComponent } from './avatarselector/avatarselector.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    AvatarselectorComponent
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
