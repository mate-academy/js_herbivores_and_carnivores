'use strict';


class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(health, name);
    Animal.alive.push(this);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    }
    
    Animal.alive = Animal.alive.filter(herb => herb.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
