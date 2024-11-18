import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs } from '@angular/fire/firestore';
import { Perro } from '../domain/perros';
import { object } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerrosbfbService {

  constructor(private firestore : Firestore) { }

  addPerro(nombre:string, raza:string){
    addDoc(collection(this.firestore, 'perros'), {'nombre': nombre, 'raza': raza })
  }

  addPerrobf(perro: Perro){
    addDoc(collection(this.firestore, 'perros'), Object.assign({},perro))
  }

  async getPerrosObs(){
    const perrosCollection = collection(this.firestore, 'perros')
    const perrosSnapShot = await getDocs(perrosCollection)
    return perrosSnapShot .docs.map(doc => ({id: doc.id, ...doc.data()}))
  }

  deletePerro(perroId: string) {
    // Eliminar un perro por su ID
    const perroDocRef = doc(this.firestore, `perros/${perroId}`);
    return deleteDoc(perroDocRef);
  }
}
