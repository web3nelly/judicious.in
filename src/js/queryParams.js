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
  if (undefined == urlParams().get("bgColor")) {
    return;
  } else return parseInt(urlParams().get("headSize"));
}

function getNumRicks() {
  if (undefined == urlParams().get("bgColor")) {
    return;
  } else return parseInt(urlParams().get("numRickDrops"));
}

export { getBGColor, getHeadSize, getNumRicks };
