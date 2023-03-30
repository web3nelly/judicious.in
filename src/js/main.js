import RickDrops from "./RickDrops.js";
import animateHead from "./animateHead.js";
import { setBackgroundColor, setHeadSize, getNumRicks } from "./queryParams.js";

const isMobileDevice = window.innerWidth <= 1222;
const rainContainer = document.querySelector(".rain");
const myHead = document.querySelector(".rotate-image");

let numRickDrops = isMobileDevice ? 55 : 111;
numRickDrops = getNumRicks() ?? numRickDrops;

let interactions = Math.random() * 5;

const rickDrops = new RickDrops(rainContainer, numRickDrops, interactions);

const handleInteraction = () => {
  interactions = interactions > 34 ? 0 : ++interactions;

  animateHead(myHead, interactions);
  rickDrops.interactions = interactions;
  rickDrops.rain();
};

document.addEventListener("keyup", handleInteraction);
document.addEventListener("click", handleInteraction);
document.addEventListener("mousewheel", handleInteraction);

setBackgroundColor();
setHeadSize(myHead);
rickDrops.rain();
