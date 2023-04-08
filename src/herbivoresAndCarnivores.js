'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(herbivore) {
    if (herbivore instanceof Carnivore || herbivore.hidden) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      const indexToDelete = Animal.alive.findIndex(animal =>
        animal.name === herbivore.name && animal.health <= 0);

      Animal.alive.splice(indexToDelete, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
