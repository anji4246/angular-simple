import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
