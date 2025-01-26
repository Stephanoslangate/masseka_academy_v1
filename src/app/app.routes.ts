import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { EditComponent } from './composants/edit/edit.component';
import { LoginComponent } from './composants/login/login.component';
import { LayoutComponent } from './composants/layout/layout.component';
export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"layout",
        component:LayoutComponent,
        children:[
            {
                path: "liste",
                component: ListeComponent
            },
            {
                path: "edit/:id",
                component: EditComponent
            }
        ]
    },
   
];
