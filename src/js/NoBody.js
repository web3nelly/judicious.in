export default class NoBody {
  myHead = null;
  minSpinDuration = 0.22; // minimum animation duration
  maxSpinDuration = 5.5; // maximum animation duration

  createMyHead(parent = document.body, headSize = "33%") {
    parent.innerHTML = "";
    if (0 === headSize) return;
    this.myHead = document.createElement("img");
    this.myHead.src = "./src/img/we/nobody-pink.gif";
    this.myHead.style.cursor = "wait";
    this.myHead.style.display = "block";
    this.myHead.style.position = "sticky";
    this.myHead.style.width = headSize;
    this.myHead.style.maxWidth = "777px";
    this.myHead.style.height = "auto";
    this.myHead.style.margin = "auto";
    this.myHead.classList.add("noBodysHead", "rotate-image");
    this.setHeadSize(headSize);
    parent.appendChild(this.myHead);
  }

  setHeadSize(headSize) {
    if (!headSize || headSize == "33%") return;

    if (headSize > 10 && 1111 > headSize) {
      this.myHead.style.maxWidth = headSize + "px";
      this.myHead.style.width = headSize + "px";
    } else this.myHead.style.width = "33%";
  }

  animate(interactions, maxInteractions) {
    if (!this.myHead) return;

    this.myHead.style.animationDuration = "1.33s";
    this.myHead.classList.add("bounce-animation");

    setTimeout(() => {
      this.myHead.classList.remove("bounce-animation");
      this.myHead.style.animationDirection =
        interactions > 20 ? "reverse" : "normal";
      this.myHead.style.animationDuration = `${this.calAnimationDuration(
        interactions,
        maxInteractions
      )}s`;
      this.myHead.rotate;
    }, 1111); // Remove the class after the animation duration (1s)
  }

  calAnimationDuration(interactions, maxInteractions) {
    const duration =
      this.maxSpinDuration -
      (interactions / (maxInteractions * (this.minSpinDuration * 2))) *
        (this.maxSpinDuration - this.minSpinDuration);
    return Math.max(duration, this.minSpinDuration);
  }

  setBGColor(bgColor) {
    if (undefined != bgColor && bgColor) {
      document.body.style.backgroundColor = bgColor;
    }
  }
}
