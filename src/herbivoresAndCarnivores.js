'use strict';

class Animal {
  static alive = [];

  constructor (name, health = 100, lives = true) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor (name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide () {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Herbivore {
  constructor (name, health, hidden = false) {
    super(name, health, hidden);
  }

  bite (animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      console.log(animal, 'was bitten');

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(a => a.health > 0);
      }
    }
  }
}

const herb = new Herbivore('Zebra');
const herb2 = new Herbivore('Zebras');
const alfa = new Carnivore('Domka');
const alfa2 = new Carnivore('Domka2');
// alfa.hide();
// console.log(Animal.alive);
// Animal.die(herb);


// herb.hide();
alfa.bite(herb);
alfa.bite(herb);
alfa.bite(herb2);
alfa.bite(alfa2);

console.log(Animal.alive);

module.exports = {
  Animal,
  Herbivore,
  Carnivore
};
