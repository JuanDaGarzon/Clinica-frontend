import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
{ path: "", component: MenuComponent },
{ path: "login", component: LoginComponent },
{ path: "record", component: RecordComponent },
{ path: "recover-pwd", component: RecoverPwdComponent },
{ path: "edit-account", component: EditAccountComponent },
{ path: "request-management", component: RequestManagementComponent },
{ path: "appointment-management", component: AppointmentManagementComponent },
{ path: "petition-detail", component: PetitionDetailComponent },
{ path: "appointment-detail", component: AppointmentDetailComponent },
{ path: "medical-history", component: MedicalHistoryComponent },
{ path: "appointment-assignment", component: AppointmentAssignmentComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
