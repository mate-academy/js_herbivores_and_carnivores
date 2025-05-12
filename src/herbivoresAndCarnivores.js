class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  // dddddd
  static removeIfDead(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => a !== animal);
    }
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
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }
    target.health -= 50;
    Animal.removeIfDead(target);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

