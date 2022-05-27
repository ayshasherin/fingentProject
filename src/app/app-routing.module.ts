import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectDatesComponent } from './collect-dates/collect-dates.component';
import { StockInformationDetailsComponent } from './stock-information-details/stock-information-details.component';

const routes: Routes = [
  {path: '',component:CollectDatesComponent},
  {path : 'stock-details',component:StockInformationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
