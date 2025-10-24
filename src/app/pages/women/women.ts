import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  imports: [CommonModule],
  templateUrl: './women.html',
  styleUrl: './women.css',
})
export class Women {
  heading = 'TENDENCIAS QUE MARCAN ESTILOS';

  cards = [
    {
      title: 'El protagonista del look',
      img: '../../../assets/img/mujerAdida.png',
      alt: 'Grupo de personas con ropa adidas',
    },
    {
      title: 'Sube el nivel y eleva cualquier outfit',
      img: '../../../assets/img/card2.png',
      alt: 'Personas caminando rápido con zapatillas',
    },
    {
      title: 'Colores dulces pero nunca aburridos',
      img: '../../../assets/img/card3.png',
      alt: 'Mujer con chaqueta celeste y falda',
    },
  ];
  productoswomen = [
    {
      id: 11,
      nombre: 'Tenis de Running Duramo RC 2',
      precio: 599000,
      imagen: '../../../assets/img/tenis-de-running-duramo-rc2-MUJER.png',
    },
    {
      id: 12,
      nombre: 'Tenis response runner azul',
      precio: 829000,
      imagen: '../../../assets/img/Tenis_Response_Runner_Azul_JQ2541_01_00_standard-MUJER.png',
    },
    {
      id: 13,
      nombre: 'Tenis Duramo SL 2.0 ',
      precio: 569000,
      imagen: '../../../assets/img/Tenis_Duramo_SL_2.0_Blanco_HQ4130_01_00_standardMUJER.png',
    },
    {
      id: 14,
      nombre: 'Tenis  de running galaxy 7',
      precio: 599000,
      imagen: '../../../assets/img/tenis-de-running-galaxy-7MUJER.png',
    },
    {
      id: 15,
      nombre: 'Tenis Adidas Initation Turquesa',
      precio: 359000,
      imagen: '../../../assets/img/Tenis_adidas_Initiation_Turquesa_JP8014_01_00_standardMUJER.png',
    },
    {
      id: 16,
      nombre: 'Tenis de Running Supernova Rise 2 ',
      precio: 696000,
      imagen:
        '../../../assets/img/Tenis_de_Running_Supernova_Rise_2_Blanco_IH8664_01_00_standardMUJER.png',
    },
  ];
  constructor(private router: Router) {}

  navigation(id: number) {
    this.router.navigate(['/detalles', id]);
  }
}
