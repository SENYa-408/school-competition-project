// IFEE
(() => {
  // variables
  let elements;
  let windowHeight;

  // init function
  const init = () => {
    // set values to variables
    elements = document.querySelectorAll(".fadein");
    windowHeight = window.innerHeight;
  };

  // checkPosition function
  let checkPosition = () => {
    // for every element in elements
    elements.forEach((el) => {
      // find position from top
      let positionFromTop = el.getBoundingClientRect().top;

      // check if current element is visible
      if (positionFromTop - windowHeight <= 0) {
        // add animation class
        el.classList.add("fadein-anim");
        // remove fadein class
        el.classList.remove("fadein");
      } else {
        // remove animation class
        el.classList.remove("fadein-anim");
        // add fadein class
        el.classList.add("fadein");
      }
    });
  };

  // EventListener that listens to scroll and resize events
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  // Play animation if elements is visible right from the start
  init();
  checkPosition();
})();
