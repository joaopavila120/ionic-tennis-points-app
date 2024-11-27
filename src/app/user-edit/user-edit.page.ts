import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class UserEditPage {
  userForm: FormGroup; // Formulário para edição
  userId: number; // ID do usuário

  constructor(
    private route: ActivatedRoute, // Para capturar o ID da rota
    private fb: FormBuilder, // Para construir o formulário
    private router: Router // Para redirecionar após salvar
  ) {
    this.userId = +this.route.snapshot.paramMap.get('id')!; // Obtém o ID da URL

    // Dados fictícios para simular a edição
    const mockUser =
      this.userId === 1
        ? { name: 'Deadpool', birthDate: '1990-01-01', gender: 'Masculino', height: 1.75, weight: 70, handedness: 'Destro' }
        : this.userId === 2
        ? { name: 'Wolverine', birthDate: '1995-05-15', gender: 'Feminino', height: 1.65, weight: 60, handedness: 'Canhota' }
        : { name: '', birthDate: '', gender: '', height: null, weight: null, handedness: '' };

    // Inicializa o formulário
    this.userForm = this.fb.group({
      name: [mockUser.name, Validators.required],
      birthDate: [mockUser.birthDate, Validators.required],
      gender: [mockUser.gender, Validators.required],
      height: [mockUser.height, Validators.required],
      weight: [mockUser.weight, Validators.required],
      handedness: [mockUser.handedness, Validators.required],
    });
  }

  // Salva os dados e redireciona
  saveUser() {
    if (this.userForm.valid) {
      console.log('Usuário salvo:', this.userForm.value);
      this.router.navigate(['/users']);
    } else {
      console.error('Formulário inválido.');
    }
  }
}
