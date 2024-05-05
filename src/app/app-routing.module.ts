import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { MatchesComponent } from './matches/matches.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'team',component:TeamComponent},
  {path:'login',component:LoginComponent},
  {path:'players/:team',component:PlayersComponent},
  {path:'matches',component:MatchesComponent},
  {path:'booking',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
