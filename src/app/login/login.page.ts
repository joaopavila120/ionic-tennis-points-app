import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Credenciais mockadas
      if (username === 'joao' && password === '178898') {
        this.router.navigate(['/users']); // Redireciona para a página de usuários
      } else {
        alert('Credenciais inválidas.');
      }
    }
  }
}
