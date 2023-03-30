export default class RickDrops {
  constructor(rainContainer, numRick = 111, interactions = 0) {
    this.rickTwerks = [
      "rick-sanchez-twerk-sq-33.gif",
      "rick-sanchez-twerk-sq-69.gif",
      "rick-sanchez-twerk-sq-88.gif",
      "rick-sanchez-twerk-sq-99.gif",
      "rick-sanchez-twerk-sq-121.gif",
    ];
    this.rickRekts = [
      "rick-sanchez-rekt-sq.gif",
      "rick-sanchez-rekt-sq-x2.gif",
      "rick-sanchez-rekt-sq-x5.gif",
    ];
    this.rickSrc = "../src/img/rick-twerks/";
    this.rickMixed = [];
    this.rainContainer = rainContainer;
    this.numRickDrops = numRick;
    this.interactions = interactions;
    this.minAnimationDuration = 5;
    this.maxAnimationDuration = 13;
  }

  generate() {
    this.rainContainer.innerHTML = ""; // Clear old drops

    for (let i = 0; i < this.numRickDrops; i++) {
      this.rainContainer.appendChild(this.creatDrop());
    }
  }

  creatDrop() {
    const size = `${Math.random() * 111 + 11}px`;
    const rickDrop = document.createElement("div");

    rickDrop.classList.add("rickDrop");
    rickDrop.style.left = `${Math.random() * 100}%`;
    rickDrop.style.top = `${Math.random() * -144 - 55}px`;
    rickDrop.style.width = size;
    rickDrop.style.height = size;
    rickDrop.style.backgroundSize = "cover";
    rickDrop.style.backgroundImage = this.getDropBG();

    if (this.interactions > 12) this.rotate(rickDrop);

    return this.animateDrop(rickDrop);
  }

  getDropBG() {
    if (this.interactions > 2 && this.interactions <= 8) {
      return this.randomRickMixed();
    }
    if (this.interactions > 8) {
      return this.randomRickRekt();
    }

    return this.randomRickTwerk();
  }

  randomRickTwerk() {
    return `url("${this.rickSrc + this.getRandomRick(this.rickTwerks)}")`;
  }

  randomRickRekt() {
    return `url("${this.rickSrc + this.getRandomRick(this.rickRekts)}")`;
  }

  randomRickMixed() {
    this.createRandomRickMixed();
    return `url("${this.rickSrc + this.getRandomRick(this.rickMixed)}")`;
  }

  createRandomRickMixed() {
    this.rickMixed = [...this.rickTwerks, ...this.rickRekts];
  }

  getRandomRick(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  rotate(rickDrop) {
    if (this.interactions > 12 && this.interactions <= 20)
      rickDrop.style.rotate = `${this.interactions / 2}deg`;

    if (this.interactions > 20) {
      rickDrop.style.rotate = `${-this.interactions / 3}deg`;
    }
  }

  animateDrop(rickDrop) {
    const animationDuration =
      Math.random() * (this.maxAnimationDuration - this.minAnimationDuration) +
      this.minAnimationDuration;

    rickDrop.style.animationDuration = `${
      animationDuration - this.interactions / 2
    }s`;
    rickDrop.style.animationDelay = `${Math.random() * animationDuration}s`;

    return rickDrop;
  }
}
