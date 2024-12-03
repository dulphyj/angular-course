import { Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FormComponent } from './form/form.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './login-guard.service';

export const routes: Routes = [
    { path: '', component: ProductListingComponent, canActivate: [LoginGuardService] },
    { path: 'list', component: ProductListingComponent, canActivate: [LoginGuardService] },
    { path: 'add', component: FormComponent, canActivate: [LoginGuardService] },
    { path: 'edit/:key', component: FormComponent, canActivate: [LoginGuardService] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorComponent }
];
