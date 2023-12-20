import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent {

  falso = false;
  vdd = true;

  products: any;

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
          this.products = ['ADRIANA', 'CARLOS LIRA', 'IVAN LINS', 'JORGE BEN JOR',
      'JOSÉ AUGUSTO', 'LUIZ MELODIA', 'MARCOS VALLE', 'PENINHA (SONHOS)', 'RAUL SEIXAS', 'ROSEMARY',
    'SALLY BAWDWIN (UK)', 'SERGINHO ROUPA NOVA', 'SIDNEY MAGAL', 'TAIGUARA', 'THE FEVERS', 'TIM MAIA', 'WANDO']


     this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}
