'use strict';

class Animal {
  constructor(name, health = 100) {
    Animal.alive.push(this);
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(hervibore) {
    if (hervibore instanceof Herbivore && !hervibore.hidden) {
      hervibore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(beast =>
      beast instanceof Herbivore && beast.health > 0
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
