'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  getInfo() {
    const info = {
      name: this.name,
      health: this.health,
    };

    if (this.hidden !== undefined) {
      info.hidden = this.hidden;
    }

    return info;
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
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
      prey.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
