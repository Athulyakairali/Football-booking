import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  constructor(private router: Router) { }
  selectedTeam: string = '';
  players: { [team: string]: string[] } = {
    'Thailand': ['Nicholas', 'Supachai', 'Sarach'],
    'Argentina': ['Player 1', 'Player 2', 'Player 3'],
    'Germany': ['Player 1', 'Player 2', 'Player 3'],
    'Brazil': ['Player 1', 'Player 2', 'Player 3'],
    'England': ['Player 1', 'Player 2', 'Player 3'],
    'France': ['Player 1', 'Player 2', 'Player 3'],

  };

  showTeam(team: string) {
    // Navigate to the players component with the selected team as a parameter
    this.router.navigate(['/players', team]);
  }
}

