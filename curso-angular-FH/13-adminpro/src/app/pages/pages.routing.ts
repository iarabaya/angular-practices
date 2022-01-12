import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { ChartsComponent } from "./charts/charts.component";

const routes: Routes = [
    {
        path: 'dashboard', 
        component: PagesComponent,
        children:[
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'charts', component: ChartsComponent },
          { path: 'account-settings', component: AccountSettingsComponent },
        //   { path: '', redirectTo:'/dashboard', pathMatch:'full' },
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}