import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {
  fechaNacimiento: string = '';
  edad: number = 0;
  estado:string = '';
  imagen: string = '';
  mensage:string = '';

  constructor() { }

  ngOnInit() {
  }

  calcularEdad() {
    const fechaNacimiento = new Date(this.fechaNacimiento);
    const hoy = new Date();
    const edadMilisegundos = hoy.getTime() - fechaNacimiento.getTime();
    const edad = Math.floor(edadMilisegundos / 1000 / 60 / 60 / 24 / 365.25);
    this.edad = edad;

    if (edad < 2) {
      this.estado = 'Bebé';
      this.imagen = 'assets/bebe.jpg';
    } else if (edad <= 13) {
      this.estado = 'Niño';
      this.imagen = 'assets/nino.jpg';
    } else if (edad <= 18) {
      this.estado = 'Adolescente';
      this.imagen = 'assets/adolescente.webp';
    } else if (edad < 60) {
      this.estado = 'Adulto';
      this.imagen = 'assets/adulto.jpg';
  } else if (edad > 60) {
    this.estado = 'Anciano';
    this.imagen = 'assets/anciano.webp';
  }

}

}
