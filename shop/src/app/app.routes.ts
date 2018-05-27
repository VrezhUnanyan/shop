import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';
import { BodyComponent } from './component/body/body.component';


// Route Configuration
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'body/shop', component: BodyComponent },
    { path: 'body/children', component: BodyComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
