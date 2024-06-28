class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }

  static getAlive() {
    return Animal.alive.map(({ name, health, hidden }) => ({
      name,
      health,
      hidden,
    }));
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
    if (animal instanceof Herbivore && !animal.hidden && !animal.Carnivore) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeFromAlive(animal);
      }
    } else {
      return false;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
