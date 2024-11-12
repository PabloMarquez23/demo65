import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrononmetroComponent } from '../../components/crononmetro/crononmetro.component';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { DadoComponent } from '../../components/dado/dado.component';
import { GestionPerrosService } from '../../services/gestion-perros.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, CrononmetroComponent, TablaComponent, DadoComponent,CrononmetroComponent,RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'], // Corrige esto a styleUrls
})
export class InicioComponent implements OnInit{
  title = 'demo65';
  name = 'Pablo Márquez';
  edad = 20;
  salario = 1000;
  contador = 0;
  sueldos = [1700, 500, 950, 450];
  a = 0;
  b = 0;
  c = 0;
  codigo = 0;
  descripcion = '';
  precio = 0;


  perros:any
  constructor(private perrosService: GestionPerrosService){


  }
  ngOnInit(): void {
    this.perrosService.addPerros('Renzo','Beagle')
    this.perrosService.addPerros('Rambo','Koeker')
    this.perros=this.perrosService.getPerros()
  }

  esMayorDeEdad() {
    return this.edad >= 18 ? 'ES MAYOR DE EDAD' : 'es menor de edad';
  }

  incrementar() {
    this.contador = this.contador + 1;
  }

  articulos = [
    { codigo: 1, descripcion: 'TV', precio: 540 },
    { codigo: 2, descripcion: 'Microondas', precio: 140 },
    { codigo: 3, descripcion: 'Licuadora', precio: 40 },
  ];

  sumar() {
    this.c = this.a + this.b;
  }

  borrarArticulo(codigo: number) {
    this.articulos = this.articulos.filter((art) => art.codigo !== codigo);
  }

  seleccionarArticulo(articulo: any) {
    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
  }

  save() {
    const articuloExistente = this.articulos.find((art) => art.codigo === this.codigo);
    if (articuloExistente) {
      articuloExistente.descripcion = this.descripcion;
      articuloExistente.precio = this.precio;
    } else {
      this.articulos.push({
        codigo: this.codigo,
        descripcion: this.descripcion,
        precio: this.precio,
      });
    }
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  @ViewChild('dado1') dado1!: DadoComponent;
  @ViewChild('dado2') dado2!: DadoComponent;
  @ViewChild('dado3') dado3!: DadoComponent;

  images: string[] = [
    'assets/images/1.png',
    'assets/images/1.png',
    'assets/images/2.png',
    'assets/images/2.png',
    'assets/images/3.png',
    'assets/images/4.png',
    'assets/images/5.png',
    'assets/images/6.png',
  ];

  selectedImages: string[] = [];
  message: string = '';

  // Método para lanzar todos los dados
  lanzarTodos(): void {
    this.dado1.lanzar();
    this.dado2.lanzar();
    this.dado3.lanzar();
  }

  // Método que selecciona 3 imágenes aleatorias
  showRandomImages(): void {
    this.selectedImages = [];
    this.message = ''; // Limpiar mensaje previo

    const imagesCopy = [...this.images];

    while (this.selectedImages.length < 3) {
      const randomIndex = Math.floor(Math.random() * imagesCopy.length);
      const selectedImage = imagesCopy.splice(randomIndex, 1)[0];
      this.selectedImages.push(selectedImage);
    }

    // Verificar si hay 2 imágenes del mismo número
    const imageNumbers = this.selectedImages.map((img) => img.match(/\d+/)?.[0]);
    const duplicate = imageNumbers?.find((num, index) => imageNumbers.indexOf(num) !== index);

    if (duplicate) {
      this.message = '¡Felicidades, ganaste!';
    }
  }

  minuto = 0;

  actualizar(estado: boolean) {
    if (estado == true) {
      this.minuto++;
    }
  }


}