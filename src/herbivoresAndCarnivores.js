'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    const alreadyHas = Animal.alive.some(animal => animal.name === name);

    if (!alreadyHas) {
      Animal.alive.push(this);
    }
  }
}

Animal.alive = [];

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
    if (!prey.hidden
      && Object.getPrototypeOf(prey).constructor !== Carnivore) {
      prey.health -= 50;

      if (prey.health === 0) {
        const animalInd = Animal.alive.findIndex(animal =>
          animal.name === prey.name
        );

        Animal.alive.splice(animalInd, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
