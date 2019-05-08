import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'rm -rf standalone/deployments/interbank-pay-core.war && ln -s /customize/war/interbank-pay-core.war standalone/deployments/ && exit' },
      { id: 2, name: 'ng build --prod --output-path docs --base-href /x-commands/' },
      { id: 3, name: 'ng serve' },
      { id: 4, name: 'happy' },
      { id: 5, name: 'right' },
      { id: 6, name: 'now' },
      { id: 7, name: 'life' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/