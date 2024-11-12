import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss'], // Asegúrate de tener este archivo si necesitas estilos
})
export class DadoComponent {
  @Input() color!: string; // Color del dado
  valor: number = 1; // Valor inicial del dado

  // Método para lanzar el dado
  lanzar(): void {
    this.valor = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
  }
}
