import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  imports: [CommonModule],
  templateUrl: './men.html',
  styleUrl: './men.css',
})
export class Men {
  heading = 'ENCUENTRA TU PASIÓN POR EL DEPORTE';
  cards = [
    {
      titulo: 'Running',
      img: '../../../assets/img/deporte.png',
      alt: 'Persona corriendo en la playa',
    },
    {
      titulo: 'Entrena con ropa cómoda y ligera',
      img: '../../../assets/img/deportesAdidas.png',
      alt: 'Deporte ligero con ropa Adidas',
    },
    {
      titulo: 'Fútbol',
      img: '../../../assets/img/futbol.png',
      alt: 'Balón de fútbol sobre el césped',
    },
    {
      titulo: 'Todo lo que necesitas para dentro y fuera de la cancha',
      img: '../../../assets/img/basket.png',
      alt: 'Basketbol',
    },
    {
      titulo: 'La comodidad es una forma de vida',
      img: '../../../assets/img/comodo.png',
      alt: 'comodidad',
    },
    {
      titulo: 'Lo retro solo evolucionó',
      img: '../../../assets/img/retro.png',
      alt: 'Ropa deportiva',
    },
  ];

  productosmen = [
    {
      id: 17,
      nombre: 'Zapatillas Adidas Superstar',
      precio: 299000,
      imagen: '../../../assets/img/TenisSuperstarBlancos.png ',
    },
    {
      id: 18,
      nombre: 'Tenis Adizero Negro',
      precio: 249000,
      imagen: '../../../assets/img/Tenis_Adizero_Negro.png',
    },
    {
      id: 19,
      nombre: 'Tenis Grand ',
      precio: 199000,
      imagen: '../../../assets/img/Tenis_adidas_Grand.png',
    },
    {
      id: 20,
      nombre: 'Botas Superstar luxe ',
      precio: 800000,
      imagen: '../../../assets/img/BOTAS_SUPERSTAR_LUXE_TC_Negro1.png',
    },
    {
      id: 21,
      nombre: 'Tenis Sambae ',
      precio: 250000,
      imagen: '../../../assets/img/Tenis_Sambae_Blanco.png',
    },
    {
      id: 22,
      nombre: 'Tenis SL',
      precio: 389000,
      imagen: '../../../assets/img/Tenis_SL_72_RS_Negro.png',
    },
    {
      id: 23,
      nombre: 'Tenis Taekwond ',
      precio: 309000,
      imagen: '../../../assets/img/tenis-taekwond.png',
    },
    {
      id: 24,
      nombre: 'Tenis Tekkira ',
      precio: 459000,
      imagen: '../../../assets/img/Tekkira_Cup_Negro.png',
    },
    {
      id: 25,
      nombre: 'Tenis Gazelle ',
      precio: 599000,
      imagen: '../../../assets/img/tenis-gazelle.png',
    },
    {
      id: 26,
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
