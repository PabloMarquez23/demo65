import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { MisionComponent } from './pages/mision/mision.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerrosComponent } from './pages/perros/perros.component';

export const routes: Routes = [
    {
        path: 'pages/inicio',
        component:InicioComponent
    },
    {
        path: 'pages/acercade',
        component: AcercaDeComponent
    },
    {
        path: 'pages/mission',
        component: MisionComponent
    },
    {
        path: 'pages/perros',
        component:PerrosComponent
    }

];

