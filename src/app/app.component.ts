import { Component } from '@angular/core';


import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.usuarios = db.collection('usuarios').valueChanges();
  }

  ngOnInit() {
    this.createIDs();
  }

  createIDs(): void {
    for (let usuario of this.usuarios) {
      const first_two_characters = usuario.primer_apellido.substring(1, 3);
      const second_two_characters = usuario.segundo_apellido.substring(1, 3);
      const third_two_characters = usuario.nombre.substring(1, 3);
      const first_part = first_two_characters + second_two_characters + third_two_characters;
      usuario.string_id = first_part;
      usuario.update(usuario);
    }
  }
}
