'use strict';

class Animal {
  constructor(health = 100, name) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(100, name);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(100, name);
  }

  bite(herbAnimal) {
    if ((!herbAnimal.hidden) && (herbAnimal instanceof Herbivore)) {
      herbAnimal.health -= 50;
    }

    if (herbAnimal.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbAnimal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
