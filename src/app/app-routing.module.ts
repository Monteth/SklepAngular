import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {AppsComponent} from './apps/apps.component';
import {AccountComponent} from './account/account.component'
import {SetRestrictionsComponent} from './set-restrictions/set-restrictions.component'

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: 'apps', component: AppsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'restrictions', component: SetRestrictionsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
