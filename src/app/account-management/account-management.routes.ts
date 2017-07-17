import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const AccountManagementRoutes: Routes = [
    { path:'', component: LoginComponent },
    { path:'register', component: RegistrationComponent },
]
