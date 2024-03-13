'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, role = 'herbivore') {
    super(name);
    this.role = role;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, role = 'carnivore') {
    super(name);
    this.role = role;
  }

  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health === 0) {
      const index = Animal.alive.indexOf(target);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
