import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  selectedTeam!: string;
  players: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve the selected team from route parameters
    this.route.params.subscribe(params => {
      this.selectedTeam = params['team'];
      this.players = this.getPlayersForTeam(this.selectedTeam); // Get players for the selected team
    });
  }

  getPlayersForTeam(team: string): string[] {
    // Mocked players data based on the selected team
    // Replace this with your actual data retrieval logic
    return ['Messi', 'Ronaldo', 'Haland','Neymar','Mbappe'];
  }
}
