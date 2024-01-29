import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'first-component', title: 'First component', component: FirstComponent },
    { path: 'second-component', title: 'Second component', component: SecondComponent },
    { path: 'home-component', title: 'Home component', component: HomeComponent },
    { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
];
