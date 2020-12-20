import { Component, Input, OnInit, ViewChild } from '@angular/core';


declare var mapboxgl:any; 

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string="";
  @ViewChild('mapa')  mapa;


  constructor() { }

  ngAfterViewInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiaWNlZHJ1bSIsImEiOiJja2lxazE4Zm8wZWJuMzBueTczOWQ5OW1vIn0.BeJNc50SlVtI7SL0zYAjxQ';

    let latitud: number;
    let longitud: Number;

    console.log(this.coords);


      if (!this.coords){
        latitud=0;
        longitud=0;
        
      } else {
        const latlon=this.coords.split(',');
        latitud=Number(latlon[0]);
        longitud=Number(latlon[1]);
      }


    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitud,latitud],
      zoom: 15
      });


      const marker=new mapboxgl.Marker().setLngLat([longitud,latitud]).addTo(map);

  }




}
