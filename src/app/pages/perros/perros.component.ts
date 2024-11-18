import { Component, OnInit } from '@angular/core';
import { Perro } from '../../domain/perros';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerrosbfbService } from '../../services/perrosbfb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.scss'
})
export class PerrosComponent implements OnInit {
  perro: Perro = new Perro
  perros:any

  constructor(private perrosFBservice: PerrosbfbService){

  }
  async ngOnInit(): Promise <void> {
    this.perros = await this.perrosFBservice.getPerrosObs()
  }

  guardar(){
    this.perrosFBservice.addPerrobf(this.perro)
  }
  seleccionar(perro: any) {
    // Seleccionar un perro y rellenar el formulario
    this.perro = { ...perro };
  }

  borrar(perroId: string) {
    // Eliminar un perro por su ID y recargar la lista
    this.perrosFBservice.deletePerro(perroId).then(async () => {
      this.perros = await this.perrosFBservice.getPerrosObs();
    });
  }
}
