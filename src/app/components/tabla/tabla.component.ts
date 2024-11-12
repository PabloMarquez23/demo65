import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],  // Agrega CommonModule aquí
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  @Input() articulos: any[] = [];
  @Output() articuloBorrado = new EventEmitter<number>();
  @Output() seleccionarArticulo = new EventEmitter<any>();

  eliminarArticulo(codigo: number) {
    this.articulos = this.articulos.filter(art => art.codigo !== codigo);
    this.articuloBorrado.emit(codigo);  // Emitir el código del artículo borrado
  }

  selec(articulo: any) {
    this.seleccionarArticulo.emit(articulo);
  }
}
