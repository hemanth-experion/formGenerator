import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CreateFormComponent } from "./create-form/create-form.component";
import { ViewFormComponent } from "./view-form/view-form.component";
const APP_ROUTES: Routes = [
  {path:'', component:CreateFormComponent},
  {path:'view', component:ViewFormComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
