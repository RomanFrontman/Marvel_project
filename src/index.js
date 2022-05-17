function scrollFunction1() {
    let e = document.getElementById("start");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

  window.addEventListener("scroll", function() {
    let elementTarget = document.getElementById("thanos-disappear");
    if (window.scrollY > (elementTarget.offsetTop - 100)) {
        elementTarget.classList.add("hidden"); ;
    }
  });

  