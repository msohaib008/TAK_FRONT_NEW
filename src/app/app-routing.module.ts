import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { IdeaPageComponent } from './components/idea-page/idea-page.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostCreationComponent } from './components/post-creation/post-creation.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RegisterEnterprunureComponent } from './components/register-enterprunure/register-enterprunure.component';
import { RegisterInvestorComponent } from './components/register-investor/register-investor.component';
import { RegisterSkilledPersonComponent } from './components/register-skilled-person/register-skilled-person.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SkilledRejectQuestionsComponent } from './components/skilled-reject-questions/skilled-reject-questions.component';
import { SkilledYesQuestionsComponent } from './components/skilled-yes-questions/skilled-yes-questions.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TestingComponent } from './components/testing/testing.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"testing", component:TestingComponent},
      {path:"register", component:RegisterUserComponent},
      {path:"register-entrepreneur", component:RegisterEnterprunureComponent},
      {path:"new-idea", component:IdeaPageComponent},
      {path:"register-skilled-person", component:RegisterSkilledPersonComponent},
      // {path:"post-creation", component:PostCreationComponent},
      {path:"Proceed", component:SkilledYesQuestionsComponent},
      {path:"InProcess", component:SkilledRejectQuestionsComponent},
      // {path:"register-investor", component:RegisterInvestorComponent},
      {path:"login", component:LoginComponentComponent},
      {path:"home", component:DashboardComponent},
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"table", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"button", component:ButtonsComponent},
    ]
  },

  {path:"", redirectTo:"/login", pathMatch:"full"},
  // {path:"**", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:DashboardComponent, pathMatch:"full"},
  {path:"login", component:LoginComponentComponent, pathMatch:'full'},
  {path:"register-investor", component:RegisterInvestorComponent, pathMatch:'full'},
  {path:"post-creation", component:PostCreationComponent, pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
