'use strict';

class Organism {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type; // 'herbivore' ou 'carnivore'
    this.radius = type === 'herbivore' ? 5 : 8;
    this.speed = type === 'herbivore' ? 2 : 2.5;
    this.energy = 100;
    this.color = type === 'herbivore' ? '#4CAF50' : '#F44336'; //teste
  }

  move(canvasWidth, canvasHeight) {
    this.x += (Math.random() - 0.5) * this.speed * 2;
    this.y += (Math.random() - 0.5) * this.speed * 2;

    if (this.x < 0) {
      this.x = canvasWidth;
    }

    if (this.x > canvasWidth) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = canvasHeight;
    }

    if (this.y > canvasHeight) {
      this.y = 0;
    }

    this.energy -= 0.1;
  }

  eat(targets, foods) {
    if (this.type === 'herbivore') {
      for (let i = foods.length - 1; i >= 0; i--) {
        const dist = Math.hypot(this.x - foods[i].x, this.y - foods[i].y);

        if (dist < this.radius + 5) {
          foods.splice(i, 1);
          this.energy += 20;
        }
      }
    } else {
      for (let i = targets.length - 1; i >= 0; i--) {
        if (targets[i].type === 'herbivore') {
          const dist = Math.hypot(this.x - targets[i].x, this.y - targets[i].y);

          if (dist < this.radius + targets[i].radius) {
            targets.splice(i, 1);
            this.energy += 50;
          }
        }
      }
    }
  }

  reproduce(organismsArray) {
    if (this.energy > 150) {
      this.energy -= 70;

      const baby = new Organism(this.x, this.y, this.type);

      organismsArray.push(baby);

      return baby;
    }

    return null;
  }
}

// Corrigindo a exportação para evitar o erro no Terminal
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Organism;
}
