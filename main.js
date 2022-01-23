class Character {
  constructor(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;

    this.attackBtn = document.querySelector(`.${this.name}-attack`);
    this.healthBtn = document.querySelector(`.${this.name}-makeHealth`);
    this.progress = document.querySelector(`.${this.name}-health`);
    this.progressBar = document.querySelector(`.${this.name}-health .progress-bar`);
    this.progressPercent = document.querySelector(`.${this.name}-health .percent`);
    this.status = document.querySelector(`.${this.name}-status`);
  }

  attack(opponent) {
    if (opponent.health > 0) {
      opponent.health -= this.strength;
      opponent.progressBar.style.width = `${opponent.health}%`
      opponent.progressPercent.innerHTML = `${opponent.health}%`;
      if (opponent.health == 0) {
        opponent.attackBtn.remove();
        opponent.healthBtn.remove();
        opponent.status.innerHTML = `${opponent.name} is died`;
      }
    }
  }

  makeHealth() {
    if (this.health < 100) {
      this.health += 10;
      if (this.health > 100) {
        this.health = 100;
        this.progressBar.style.width = `${this.health}%`
        this.progressPercent.innerHTML = `${this.health}%`;
      }
      this.progressBar.style.width = `${this.health}%`
      this.progressPercent.innerHTML = `${this.health}%`;
    }
  }
}

// instance of Object
let naratoo = new Character("naratoo", 10, 100);
let sasaki = new Character("sasaki", 5, 100);

// when click on attack btn (naratoo)
naratoo.attackBtn.addEventListener("click", function () {
  naratoo.attack(sasaki);
});
// when click on health btn (naratoo)
naratoo.healthBtn.addEventListener("click", function () {
  naratoo.makeHealth();
});
// when click on attack btn (sasaki)
sasaki.attackBtn.addEventListener("click", function () {
  sasaki.attack(naratoo);
});
// when click on health btn (sasaki)
sasaki.healthBtn.addEventListener("click", function () {
  sasaki.makeHealth();
});
