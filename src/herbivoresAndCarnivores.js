'use strict';

class Animal {
  static alive = [];
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name, 'Herbivore');
    this.hidden = false;
  }

  hide() {
    return (this.hidden = true);
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!(herbivore instanceof Herbivore) || herbivore.hidden) {
      return;
    }
    herbivore.health -= 50;
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    return herbivore.health;
  }
}


module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
