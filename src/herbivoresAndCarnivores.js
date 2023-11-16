'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
};

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    } else {
      return 'This animal is already in hiding.';
    }
  }
};

class Carnivore extends Animal {
  bite(prey) {
    if (!prey) {
      return 'Provide the prey to be bitten.';
    }

    if (!(prey instanceof Herbivore)) {
      return 'Prey has to be a herbivore to be bitten.';
    }

    if (prey.hidden) {
      return 'Prey can\'t be bitten while hidden.';
    }

    if (!Animal.alive.includes(prey)) {
      return `${prey.name} is not alive.`;
    }

    prey.health -= 50;
      
    if (prey.health <= 0) {
      this.kill(prey);
    }
  }

  kill(prey) {
    Animal.alive = Animal.alive.filter(e => e !== prey);

    return `${prey.name} died :(`;
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
