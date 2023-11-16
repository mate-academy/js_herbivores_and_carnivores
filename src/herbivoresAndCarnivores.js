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
    if(!this.hidden) {
      this.hidden = true;
    } else {
      console.error('This animal is already in hiding.')
    }
  }
};

class Carnivore extends Animal {
  bite(prey) {
    if (!prey) {
      console.error('Provide the prey to be bitten.')
    }

    if (prey instanceof Herbivore
      && !prey.hidden) {
      prey.health -= 50;
      
      if(prey.health <= 0
        && Animal.alive.includes(prey)) {
          Animal.alive = Animal.alive.filter(e => e !== prey);
          console.log(`${prey.name} died :(`);
      }
    }

    if (prey instanceof Herbivore && prey.hidden) {
      console.error('Prey can\'t be bitten while hidden.')
    }

    if (!(prey instanceof Herbivore)) {
      console.error('Prey has to be a herbivore to be bitten.')
    }
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
