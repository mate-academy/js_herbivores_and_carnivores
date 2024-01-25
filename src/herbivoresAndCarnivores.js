'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
    static removeFromAlive(animal) {
      Animal.alive = Animal.alive.filter(item => item !== animal);
    }
  
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(name) {
    if (name instanceof Herbivore && !name.hidden) {
      name.health -= 50;

      if (name.health <= 0) {
        Animal.removeFromAlive(name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
