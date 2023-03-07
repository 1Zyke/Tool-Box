import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  nombre:string = '';
  genero:string = '';
  colorFondo: string = '';
  colorTexto: string = '';

  constructor() { }

  ngOnInit() {
  }

  determinarGenero() {
    // verificar si el nombre ingresado es masculino o femenino
    const nombreMinusculas = this.nombre.toLowerCase();
    const esMasculino = nombreMinusculas.endsWith('o');
    const esFemenino = nombreMinusculas.endsWith('a');
  

    // cambiar el color de fondo y de texto según el género seleccionado
    this.colorFondo = esMasculino ? 'blue' : esFemenino? 'pink' : 'white';
    this.colorTexto = esMasculino ? 'white' : esFemenino? 'black' : 'black';
    this.genero = esMasculino? 'Hombre' : esFemenino? 'Mujer' : 'Indeterminado';

    // aplicar los cambios de color a la página
    document.body.style.backgroundColor = this.colorFondo;

  }

}
