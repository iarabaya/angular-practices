import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { ChartsComponent } from "./charts/charts.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
    {
        path: 'dashboard', 
        component: PagesComponent,
        children:[
          { path: '', component: DashboardComponent, data: { title: 'Dashboard'}  },
          { path: 'progress', component: ProgressComponent, data:{ title: 'Progress Bar'}  },
          { path: 'charts', component: ChartsComponent, data:{ title: 'Charts'}  },
          { path: 'promises', component: PromisesComponent, data:{ title: 'Promises'}  },
          { path: 'rxjs', component: RxjsComponent, data:{ title: 'RxJs and Observables'}  },
          { path: 'account-settings', component: AccountSettingsComponent, data:{ title: 'Account Settings'}  },
        //   { path: '', redirectTo:'/dashboard', pathMatch:'full'},
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}