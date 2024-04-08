'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name, hidden = false) {
    this.health = health;
    this.name = name;
    this.hidden = hidden;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(100, name, hidden);
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
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
        const index = Animal.alive.indexOf(prey);

        if (index !== -1) {
          Animal.alive.splice(index, 1);
        }
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
