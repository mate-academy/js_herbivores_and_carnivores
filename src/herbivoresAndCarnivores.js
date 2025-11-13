'use strict';
class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}
class Herbivore extends Animal {
  constructor(name) {
    super(100, name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
  }
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== victim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
