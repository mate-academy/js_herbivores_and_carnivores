'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name, hidden = false) {
    this.health = health;
    this.name = name;
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(100, name, hidden);
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    }
  }

  unhide() {
    if (this.hidden) {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, hidden = false) {
    super(100, name, hidden);
  }

  bite(prey) {
    if (prey instanceof Herbivore) {
      if (!prey.hidden) {
        prey.health -= 50;
      }

      if (prey.health <= 0) {
        prey.die();
      }
    }

    return prey.health;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
