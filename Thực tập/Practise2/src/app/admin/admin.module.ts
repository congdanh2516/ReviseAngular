import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormatEmailPipe } from './pipe/format-email/format-email.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterUserPipe } from './pipe/filter-users/filter-user.pipe';
import { SortUsersPipe } from './pipe/sort-users/sort-users.pipe';
import { SearchUsersPipe } from './pipe/search-users/search-users.pipe';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HideEmailPipe } from './pipe/hide-email/hide-email.pipe';
// import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    FormatEmailPipe,
    FilterUserPipe,
    SortUsersPipe,
    SearchUsersPipe,
    AddNewUserComponent,
    HideEmailPipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
