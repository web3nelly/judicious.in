const urlParams = () => {
  return new URLSearchParams(window.location.search);
};

const sanitizeString = (str) => {
  return str.replace(/[^a-z0-9#]/gi, "");
};

function getBGColor() {
  return sanitizeString(urlParams().get("bgColor"));
}

function getHeadSize() {
  return parseInt(urlParams().get("headSize"));
}

function getNumRicks() {
  return parseInt(urlParams().get("numRickDrops"));
}

export { getBGColor, getHeadSize, getNumRicks };
