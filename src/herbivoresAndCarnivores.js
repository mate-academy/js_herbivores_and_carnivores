'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  checkHealth() {
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }

  checkHealth() {
    super.checkHealth();

    if (!this.isAlive()) {
      this.hidden = false; // Reset hidden state when it dies
    }
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      target.checkHealth();
    }
  }
}

// Example usage
const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

lion.bite(deer);
panther.bite(lion);

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
