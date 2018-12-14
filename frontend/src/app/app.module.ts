import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './dashboard/home/home.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { WalletOpenComponent } from './pages/wallet-open/wallet-open.component';
import { FundsComponent } from './pages/funds/funds.component';
import { BillsComponent } from './pages/bills/bills.component';
import { AirtimeComponent } from './pages/airtime/airtime.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { LoansComponent } from './pages/loans/loans.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { RequestComponent } from './pages/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    HomeComponent,
    PaymentComponent,
    WalletOpenComponent,
    FundsComponent,
    BillsComponent,
    AirtimeComponent,
    TransferComponent,
    LoansComponent,
    WithdrawComponent,
    RequestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
