'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeAlive(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
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
  bite(aim) {
    if (aim instanceof Herbivore && !aim.hidden) {
      aim.health -= 50;

      if (aim.health <= 0) {
        Animal.removeAlive(aim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
