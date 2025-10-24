import { Detalles } from './../detalles/detalles';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productos = [
    {
      id: 1,
      nombre: 'Zapatillas Adidas Superstar',
      precio: 299000,
      imagen: '../../../assets/img/TenisSuperstarBlancos.png ',
    },
    {
      id: 2,
      nombre: 'Tenis Adidas Initation Turquesa',
      precio: 359000,
      imagen: '../../../assets/img/Tenis_adidas_Initiation_Turquesa_JP8014_01_00_standardMUJER.png',
    },
    {
      id: 3,
      nombre: 'Tenis Grand ',
      precio: 199000,
      imagen: '../../../assets/img/Tenis_adidas_Grand.png',
    },
    {
      id: 4,
      nombre: 'Botas Superstar luxe ',
      precio: 800000,
      imagen: '../../../assets/img/BOTAS_SUPERSTAR_LUXE_TC_Negro1.png',
    },
    {
      id: 5,
      nombre: 'Tenis de Running Supernova Rise 2 ',
      precio: 696000,
      imagen:
        '../../../assets/img/Tenis_de_Running_Supernova_Rise_2_Blanco_IH8664_01_00_standardMUJER.png',
    },
    {
      id: 6,
      nombre: 'Tenis SL',
      precio: 389000,
      imagen: '../../../assets/img/Tenis_SL_72_RS_Negro.png',
    },
    {
      id: 7,
      nombre: 'Tenis Taekwond ',
      precio: 309000,
      imagen: '../../../assets/img/tenis-taekwond.png',
    },
    {
      id: 8,
      nombre: 'Tenis Tekkira ',
      precio: 459000,
      imagen: '../../../assets/img/Tekkira_Cup_Negro.png',
    },
    {
      id: 9,
      nombre: 'Tenis Gazelle ',
      precio: 599000,
      imagen: '../../../assets/img/tenis-gazelle.png',
    },
    {
      id: 10,
      nombre: 'Tenis The Simpson Forum Verde   ',
      precio: 699000,
      imagen:
        '../../../assets/img/TENIS_ADIDAS_THE_SIMPSONS_FORUM_84_LOW_CL_Verde_JQ5290_01_00_standard.png',
    },
  ];

  constructor(private router: Router) {}

  navigation(id: number) {
    this.router.navigate(['/detalles', id]);
  }
}
