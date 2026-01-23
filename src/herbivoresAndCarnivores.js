class Animal {
  name;
  health = 100;

  constructor({ health = 100, name }) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hidden = false;

  constructor({ health, name }) {
    super({ health, name });
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor({ health, name }) {
    super({ health, name });
  }

  bite(animal) {
    if (animal.hidden) {
      return;
    }

    if (animal.bite) {
      return;
    }

    animal.health -= 50;

    Animal.alive = Animal.alive.filter((item) => item.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
