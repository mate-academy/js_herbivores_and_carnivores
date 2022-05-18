'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && Animal.alive.includes(prey)) {
      if (!prey.hidden) {
        prey.health -= 50;
      }
    }

    if (prey.health <= 0) {
      Animal.alive = (Animal.alive.filter(animal =>
        animal.health > 0));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
