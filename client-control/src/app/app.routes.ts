import { Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginGuardService } from './services/login-guard.service';

export const routes: Routes = [
    { path: '', component: BoardComponent, canActivate: [LoginGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'client/edit/:id', component: EditClientsComponent, canActivate: [LoginGuardService] },
    { path: '**', component: ErrorPageComponent }
];
