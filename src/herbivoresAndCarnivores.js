'use strict';

class Animal {
  static alive = [];
  constructor(name = 'Health', health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    return (this.hidden = true);
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (!(prey instanceof Herbivore)) {
      return;
    }

    if (prey.hidden) {
      return;
    }
    prey.health -= 50;

    if (prey.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
