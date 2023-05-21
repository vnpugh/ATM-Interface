import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { DepositCoinsComponent } from './deposit-coins/deposit-coins.component';
import { DepositDollarsComponent } from './deposit-dollars/deposit-dollars.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/balance', pathMatch: 'full' },
  { path: 'balance', component: BalanceComponent },
  { path: 'deposit', component: DepositComponent,
    children: [
      { path: 'coins', component: DepositCoinsComponent },
      { path: 'dollars', component: DepositDollarsComponent },

    ]
  },

  { path: 'withdraw', component: WithdrawComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    WithdrawComponent,
    DepositComponent,
    DepositCoinsComponent,
    DepositDollarsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
