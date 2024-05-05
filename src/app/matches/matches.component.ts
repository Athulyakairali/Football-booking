import { Component } from '@angular/core';

@Component({
  selector: 'app-match-fix',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  availableMatches: { team1: string, team2: string, date: string }[] = [
    { team1: 'Team 1', team2: 'Team 2', date: '2024-02-23' },
    { team1: 'Team 5', team2: 'Team 6', date: '2024-02-24' },
    { team1: 'Team 3', team2: 'Team 4', date: '2024-02-25' }
    // Add more matches with dates
  ];

  constructor() { }
}
