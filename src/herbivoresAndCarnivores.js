class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  updateHealth(value) {
    this.health += value;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal.hidden) {
      return;
    }

    animal.updateHealth(-50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
