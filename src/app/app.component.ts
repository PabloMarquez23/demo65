import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DadoComponent } from './components/dado/dado.component';
import { CrononmetroComponent } from './components/crononmetro/crononmetro.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,  DadoComponent,CrononmetroComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})
export class AppComponent {
  title = 'demo65'
  name = 'Pablo Márquez'
  edad = 20
  salario = 1000
  contador = 0
  sueldos = [1700, 500, 950, 450]
}