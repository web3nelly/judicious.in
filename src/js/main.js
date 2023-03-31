import { getBGColor, getHeadSize, getNumRicks } from "./queryParams.js";
import NoBody from "./NoBody.js";
import RickDrops from "./RickDrops.js";

const isMobileDevice = window.innerWidth < 1222;
const rainContainer = document.querySelector(".rain");
const zoomContainer = document.querySelector(".zoom-container");

let numRickDrops = isMobileDevice ? 55 : 111;
numRickDrops = getNumRicks() ?? numRickDrops;

const maxInteractions = 34;
let interactions = Math.floor(Math.random() * 7);

const rickDrops = new RickDrops(rainContainer, numRickDrops, interactions);
const noBody = new NoBody();

const handleInteraction = () => {
  interactions = interactions > maxInteractions ? 0 : ++interactions;
  noBody.animate(interactions, maxInteractions);
  rickDrops.interactions = interactions;
  rickDrops.rain();
};

noBody.setBGColor(getBGColor());
noBody.createMyHead(zoomContainer, getHeadSize());
rickDrops.rain();

document.addEventListener("keyup", handleInteraction);
document.addEventListener("click", handleInteraction);
document.addEventListener("mousewheel", handleInteraction);
