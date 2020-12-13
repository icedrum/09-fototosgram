import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatarselector',
  templateUrl: './avatarselector.component.html',
  styleUrls: ['./avatarselector.component.scss'],
})
export class AvatarselectorComponent implements OnInit {


  @Output()  avatarsel=new EventEmitter<string>();
  @Input() avtarActual="av-1.png";
  avatarSlide ={
    slidesPerView: 3.5
  };


  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

 

  constructor() { }

  ngOnInit() {

      this.avatars.forEach (av=> av.seleccionado=false)

      for (const avatat of this.avatars){
        if (avatat.img===this.avtarActual){
          avatat.seleccionado=true;
          break;
        }
      }
  }

  seleccionarAvatar(avatar ){
    this.avatars.forEach(av => av.seleccionado=false);
    avatar.seleccionado=true;
    console.log(avatar.img);
    
    this.avatarsel.emit(avatar.img);
  }


}
