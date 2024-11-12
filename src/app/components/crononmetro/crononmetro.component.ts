import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crononmetro',
  standalone: true,
  imports: [],
  templateUrl: './crononmetro.component.html',
  styleUrl: './crononmetro.component.scss'
})
export class CrononmetroComponent {

  segundos = 0
  @Output() minuto = new EventEmitter()

  ngOnInit():void{
    this.segundos =0
    setInterval(()=>{
      this.segundos++
      if (this.segundos %10==0){
        this.minuto.emit(true)
      }
    },1000)
  }
}
