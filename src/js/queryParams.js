const urlParams = () => {
  return new URLSearchParams(window.location.search);
};

const sanitizeString = (str) => {
  return str.replace(/[^a-z0-9#]/gi, "");
};

function getBGColor() {
  if (undefined == urlParams().get("bgColor")) {
    return;
  } else return sanitizeString(urlParams().get("bgColor"));
}

function getHeadSize() {
  if (undefined == urlParams().get("headSize")) {
    return;
  } else return parseInt(urlParams().get("headSize"));
}

function getNumRicks() {
  if (undefined == urlParams().get("numRickDrops")) {
    return;
  } else return parseInt(urlParams().get("numRickDrops"));
}

function getMaxRickW() {
  if (undefined == urlParams().get("maxRickW")) {
    return;
  } else return parseInt(urlParams().get("maxRickW"));
}

function getMinRickW() {
  if (undefined == urlParams().get("minRickW")) {
    return;
  } else return parseInt(urlParams().get("minRickW"));
}

export { getBGColor, getHeadSize, getNumRicks, getMaxRickW, getMinRickW };
