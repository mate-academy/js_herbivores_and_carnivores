'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.add(this);
  }
}

Animal.alive = [];

Animal.add = (animal) => {
  Animal.alive.push(animal);
};

Animal.checkAlive = () => {
  Animal.alive = Animal.alive.filter(
    ({ health }) => health > 0
  );
};

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Herbivore) || prey.hidden) {
      return;
    }

    prey.health -= 50;

    if (prey.health <= 0) {
      Animal.checkAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
