import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundCalculatorComponent } from './compound-calculator/compound-calculator.component';
import { DripCalculatorComponent } from './drip-calculator/drip-calculator.component';

const routes: Routes = [
  { path: "compound-interest-calculator", component: CompoundCalculatorComponent },
  { path: "is-drip-worth-it", component: DripCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CompoundCalculatorComponent, DripCalculatorComponent]