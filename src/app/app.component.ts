import { Component } from '@angular/core';

import { ObjetService } from './objet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';

  constructor(
    private objetService: ObjetService
  ) {

  }

  ngOnInit() {
  }

  getTexte() {
    return this.objetService.getTexte();
  }

  setTexte(texte) {
    document.getElementById("zone1").innerHTML = texte;
  }
}
