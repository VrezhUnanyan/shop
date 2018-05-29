import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';
import { BodyComponent } from './component/body/body.component';
import { BasketComponent } from './component/basket/basket.component';

// Route Configuration
export const routes: Routes = [
    // navbar
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'basket', component: BasketComponent },

    // right menu
    { path: 'shop', component: BodyComponent },
    { path: 'children', component: BodyComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
