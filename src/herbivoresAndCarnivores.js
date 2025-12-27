class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100; // Default health is 100
    Animal.alive.push(this); // Track all alive animals
  }

  // Internal method to handle health reduction and death logic
  _receiveBite() {
    this.health -= 50;

    if (this.health <= 0) {
      // Remove animal from static array if health <= 0
      Animal.alive = Animal.alive.filter((beast) => beast !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true; // Sets hidden to true
  }
}

class Carnivore extends Animal {
  bite(target) {
    // Only bites if target is a Herbivore and not hiding
    if (target instanceof Herbivore && !target.hidden) {
      target._receiveBite();
    }
  }
}

// Use module.exports to match the 'require' in your test file
module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
