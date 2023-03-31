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
    this.rickMixedTwerks = [];
    this.rickMixedRekt = [];
    this.rainContainer = rainContainer;
    this.numRickDrops = numRick;
    this.interactions = interactions;
    this.minAnimationDuration = 5;
    this.maxAnimationDuration = 13;
  }

  rain() {
    this.rainContainer.innerHTML = ""; // Clear old drops

    for (let i = 0; i < this.numRickDrops; i++) {
      this.rainContainer.appendChild(this.creatRickDrop());
    }
  }

  creatRickDrop() {
    const size = `${Math.random() * 111 + 11}px`;
    const rickDrop = document.createElement("div");

    rickDrop.classList.add("rickDrop");
    rickDrop.style.left = `${Math.random() * 100}%`;
    rickDrop.style.top = `${Math.random() * -144 - 55}px`;
    rickDrop.style.width = size;
    rickDrop.style.height = size;
    rickDrop.style.backgroundSize = "cover";
    rickDrop.style.backgroundImage = this.getRickBG();

    this.rotate(rickDrop);

    return this.animate(rickDrop);
  }

  getRickBG() {
    if (this.interactions > 2 && this.interactions <= 5)
      return this.randomRickMixedTwerk();

    if (this.interactions > 5 && this.interactions <= 8)
      return this.randomRickMixedRekt();

    if (this.interactions > 8) return this.randomRickRekt();

    return this.randomRickTwerk();
  }

  randomRickTwerk() {
    return this.urlWrap(this.getRandom(this.rickTwerks));
  }
  randomRickRekt() {
    return this.urlWrap(this.getRandom(this.rickRekts));
  }
  randomRickMixedTwerk() {
    this.createRickMixedTwerks();
    return this.urlWrap(this.getRandom(this.rickMixedTwerks));
  }
  randomRickMixedRekt() {
    this.createRickMixedRekt();
    return this.urlWrap(this.getRandom(this.rickMixedRekt));
  }

  createRickMixedTwerks() {
    this.rickMixedTwerks = [
      ...this.rickTwerks,
      ...this.rickRekts,
      ...this.rickTwerks,
    ];
  }

  createRickMixedRekt() {
    this.rickMixedRekt = [
      ...this.rickRekts,
      ...this.rickTwerks,
      ...this.rickRekts,
    ];
  }

  getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  urlWrap(rick) {
    return `url("${this.rickSrc + rick}")`;
  }

  rotate(rickDrop) {
    if (this.interactions <= 20) {
      rickDrop.style.rotate = `${this.interactions / 2}deg`;
    } else rickDrop.style.rotate = `${-this.interactions / 2.34}deg`;
  }

  animate(rickDrop) {
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
