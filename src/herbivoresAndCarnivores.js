'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    // adiciona no array de vivos
    Animal.alive.push(this);
  }

  die() {
    // remove apenas esta instância de alive
    const idx = Animal.alive.indexOf(this);

    if (idx !== -1) {
      Animal.alive.splice(idx, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    // só morde herbívoros não escondidos
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        animal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
