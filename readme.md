# Herbivores and Carnivores

## 🎮 About the Project
This project demonstrates Object-Oriented Programming (OOP) principles through a simple ecosystem of animals. The `Animal` class serves as the base, with `Herbivore` and `Carnivore` classes extending its functionality. 

- Each animal has `health` (default: `100`) and a `name`.
- All living animals are stored in the static `Animal.alive` array.
- If an animal’s health drops to `0` or below, it is removed from `Animal.alive`.

### Herbivore  
- Has a `hide` method that sets `hidden` to `true`, allowing it to avoid attacks from carnivores.

### Carnivore  
- Has a `bite` method that reduces a herbivore’s `health` by `50`.
- Cannot attack another carnivore or a hidden herbivore.

## 🚀 Tech Stack
- **JavaScript** (Class-based object-oriented implementation)

## 🛠️ Tools & Dependencies
- **ESLint** – Ensuring code quality
- **Prettier** – Code formatting for readability
- **Jest** – Unit testing framework

## 📌 Features
✅ Demonstrates Object-Oriented Programming principles  
✅ Implements class inheritance with `Animal`, `Herbivore`, and `Carnivore`  
✅ Tracks all living animals dynamically  

## 📜 License
This project is forked from 💻 [Mate Academy](https://github.com/mate-academy/js_herbivores_and_carnivores)
