const urlParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
};

function setBackgroundColor() {
  const bgColor = urlParams().get("bgColor");

  if (bgColor) {
    document.body.style.backgroundColor = bgColor;
    // console.log(document.body.style.backgroundColor);
  }
}

function setHeadSize(img) {
  const headSize = parseInt(urlParams().get("headSize"));

  if (headSize > 10 && 1111 > headSize) {
    img.style.width = headSize + "px";
    // console.log(img.style.width);
  }
}

function getNumRicks(rickDrops) {
  const numRickDrops = parseInt(urlParams().get("numRickDrops"));

  if (numRickDrops != isNaN && 1111 > numRickDrops) {
    return numRickDrops;
  }

  return null;
}

export { setBackgroundColor, setHeadSize, getNumRicks };
