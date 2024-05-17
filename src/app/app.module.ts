import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/auth/change-password/change-password.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { LinkComponent } from './components/shared/link/link.component';
import { TextInputComponent } from './components/shared/text-input/text-input.component';
import { IconComponent } from './components/shared/icon/icon.component';
import { IconModule } from './components/shared/icon/icon.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ProductsComponent,
    ProductDetailComponent,
    AuthComponent,
    AboutUsComponent,
    FooterComponent,
    NavbarComponent,
    ButtonComponent,
    LinkComponent,
    TextInputComponent,
    IconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
