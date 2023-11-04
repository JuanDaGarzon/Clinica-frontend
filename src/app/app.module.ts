import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './page/menu/menu.component';
import { LoginComponent } from './page/login/login.component';
import { RecordComponent } from './page/record/record.component';
import { RecoverPwdComponent } from './page/recover-pwd/recover-pwd.component';
import { EditAccountComponent } from './page/edit-account/edit-account.component';
import { RequestManagementComponent } from './page/request-management/request-management.component';
import { AppointmentManagementComponent } from './page/appointment-management/appointment-management.component';
import { PetitionDetailComponent } from './page/petition-detail/petition-detail.component';
import { AppointmentDetailComponent } from './page/appointment-detail/appointment-detail.component';
import { MedicalHistoryComponent } from './page/medical-history/medical-history.component';
import { AppointmentAssignmentComponent } from './page/appointment-assignment/appointment-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RecordComponent,
    RecoverPwdComponent,
    EditAccountComponent,
    RequestManagementComponent,
    AppointmentManagementComponent,
    PetitionDetailComponent,
    AppointmentDetailComponent,
    MedicalHistoryComponent,
    AppointmentAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
