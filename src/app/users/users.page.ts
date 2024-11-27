import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class UsersPage {
  users = [
    {
      id: 1,
      name: 'Deadpool',
      birthDate: '1990-01-01',
      image: 'assets/player1.jpg',
    },
    {
      id: 2,
      name: 'Wolverine',
      birthDate: '1995-05-15',
      image: 'assets/player2.jpg',
    },
  ];

  selectedUserId: number | null = null;
  selectedUserName: string = '';

  constructor(private router: Router) {}

  // Navegar para a página de edição
  editUser(userId: number) {
    this.router.navigate(['/user-edit', userId]);
  }

  // Selecionar um usuário
  selectUser(userId: number) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      this.selectedUserId = user.id;
      this.selectedUserName = user.name;
    }
  }

  // Iniciar jogo
  beginMatch() {
    if (this.selectedUserId) {
      this.router.navigate(['/tennis-control'], {
        queryParams: { playerName: this.selectedUserName },
      });
    }
  }

  // Logout
  logout() {
    // Aqui você pode adicionar lógica para limpar dados do usuário ou sessão.
    this.router.navigate(['/login']); // Navega para a página de login
  }
}
