import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PaymentComponent } from "./dashboard/payment/payment.component";
import { WalletOpenComponent } from './pages/wallet-open/wallet-open.component';
import { FundsComponent } from './pages/funds/funds.component';
import { BillsComponent } from './pages/bills/bills.component';
import { AirtimeComponent } from './pages/airtime/airtime.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { LoansComponent } from './pages/loans/loans.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { RequestComponent } from './pages/request/request.component';


const routes: Routes = [
  {path:'', redirectTo:'user', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user', component:UserhomeComponent},
  {path:'home', component:HomeComponent},
  {path:'payment', component:PaymentComponent},
  {path:'wallet', component:WalletOpenComponent},
  {path:'funds', component:FundsComponent},
  {path:'bills', component:BillsComponent},
  {path:'airtime', component:AirtimeComponent},
  {path:'transfer', component:TransferComponent},
  {path:'loans', component:LoansComponent},
  {path:'withdraw', component:WithdrawComponent},
  {path:'request', component:RequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
