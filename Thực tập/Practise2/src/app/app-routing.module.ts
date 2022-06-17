import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminModule } from "./admin/admin.module";
import { AddNewUserComponent } from "./admin/components/add-new-user/add-new-user.component";
import { AdminComponent } from "./admin/components/admin.component";
import { SigninAuthenticationGuard } from "./core/guards/sign-in/signin-authentication.guard";
import { HomeComponent } from "./shared/home/home.component";
import { SignInComponent } from "./shared/sign-in/sign-in.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: "/home", pathMatch: "full"},
    {path: 'signin', component: SignInComponent},
    {path: 'user-list', component: AdminComponent, canActivate : [SigninAuthenticationGuard]},
    {path: 'add-new', component: AddNewUserComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}