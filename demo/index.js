function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SKELETON_COUNT = 1024;
const SKELETON_MIN_WIDTH = 24;
const SKELETON_MAX_WIDTH = 100;

class SkeletonFactory {
  constructor() {}

  static create() {
    const span = document.createElement("span");
    span.classList.add("text-skeleton");
    span.setAttribute(
      "style",
      `--skeleton-width: ${getRandomInt(
        SKELETON_MIN_WIDTH,
        SKELETON_MAX_WIDTH
      )}px`
    );

    return span;
  }
}

const content = document.getElementById("content");

const elements = new Array(SKELETON_COUNT)
  .fill(null)
  .map(SkeletonFactory.create);
elements.forEach((element) => content.appendChild(element));
