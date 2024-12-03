import { Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    { path: '', component: BoardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'client/edit/:id', component: EditClientsComponent },
    { path: '**', component: ErrorPageComponent }
];
