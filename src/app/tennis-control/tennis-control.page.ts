import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tennis-control',
  templateUrl: './tennis-control.page.html',
  styleUrls: ['./tennis-control.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TennisControlPage {
  players = [
    { id: 1, name: 'Deadpool', image: 'assets/player1.jpg', points: 0, games: 0, sets: 0 },
    { id: 2, name: 'Wolverine', image: 'assets/player2.jpg', points: 0, games: 0, sets: 0 },
  ];

  currentServer = 1; // ID do jogador que está sacando
  courtSide = 'left'; // Controle de lado da quadra
  gameOver = false; // Indica se a partida terminou
  winner: string | null = null; // Nome do jogador vencedor
  scoreLabels = ['0', '15', '30', '40', 'V']; // Labels dos pontos no tênis

  constructor(private route: ActivatedRoute) {}

  // Incrementa a pontuação de um jogador
  incrementScore(playerId: number) {
    if (this.gameOver) return;

    const player = this.players.find(p => p.id === playerId)!;
    const opponent = this.players.find(p => p.id !== playerId)!;

    if (player.points < 3) {
      // Incrementa normalmente até 40
      player.points++;
    } else if (player.points === 3) {
      if (opponent.points < 3) {
        // Ganha o game
        this.winGame(playerId);
      } else if (opponent.points === 3) {
        // Vai para vantagem
        player.points = 4;
      } else {
        // Remove a vantagem do oponente
        opponent.points = 3;
      }
    } else if (player.points === 4) {
      // Ganha o game se tiver vantagem
      this.winGame(playerId);
    }
  }

  // Método para registrar a vitória de um game
  winGame(playerId: number) {
    const player = this.players.find(p => p.id === playerId)!;
    const opponent = this.players.find(p => p.id !== playerId)!;

    player.games++;
    this.resetPoints();

    // Verifica se ganhou o set
    if (player.games >= 6 && player.games - opponent.games >= 2) {
      player.sets++;
      player.games = 0;
      opponent.games = 0;

      // Verifica se ganhou a partida
      if (player.sets === 2) {
        this.gameOver = true;
        this.winner = player.name; // Define o vencedor
      }
    }

    // Troca de lado da quadra após games ímpares
    const totalGames = this.players[0].games + this.players[1].games;
    if (totalGames % 2 !== 0) {
      this.toggleCourtSide();
    }
  }

  // Reseta os pontos dos jogadores
  resetPoints() {
    this.players.forEach(player => (player.points = 0));
  }

  // Troca os lados da quadra
  toggleCourtSide() {
    this.courtSide = this.courtSide === 'left' ? 'right' : 'left';
  }

  // Reinicia o jogo
  restartGame() {
    this.players.forEach(player => {
      player.points = 0;
      player.games = 0;
      player.sets = 0;
    });
    this.currentServer = 1;
    this.courtSide = 'left';
    this.gameOver = false;
    this.winner = null;
  }
}
