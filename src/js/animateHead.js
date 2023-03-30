const minSpinDuration = 0.33; // minimum animation duration
const maxSpinDuration = 5; // maximum animation duration

function calculateAnimationDuration(interactions) {
  const duration =
    maxSpinDuration - (interactions / 17) * (maxSpinDuration - minSpinDuration);
  return Math.max(duration, minSpinDuration);
}

function animateHead(head, interactions) {
  head.style.animationDuration = "1.33s";
  head.classList.add("bounce-animation");

  setTimeout(() => {
    head.classList.remove("bounce-animation");
    head.style.animationDirection = interactions > 20 ? "reverse" : "normal";
    head.style.animationDuration = `${calculateAnimationDuration(
      interactions
    )}s`;
    head.rotate;
  }, 1333); // Remove the class after the animation duration (1s)
}

export default animateHead;
