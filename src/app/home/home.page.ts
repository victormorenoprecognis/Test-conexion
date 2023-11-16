import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = "";
  password: string = "";

  constructor(private apiService: ApiService) {}

  onLogin(form: NgForm) {
    if (!form.valid) {
      // Manejo de formulario inválido
      return;
    }
    this.apiService.getUserDetails(this.username, this.password).subscribe(
      data => {
        console.log(data);
        // Procesar la respuesta del servidor
      },
      error => {
        console.error(error);
        // Manejo de errores
      }
    );
  }

}
