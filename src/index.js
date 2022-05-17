function scrollFunction1() {
    let e = document.getElementById("start");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

function thanos() {
    
}
disintegrate.init()

window.addEventListener("scroll", e => {
    let elementTarget = document.getElementById("disappear");
    if (window.scrollY > (elementTarget.offsetTop)) {
        const disObj = disintegrate.getDisObj(e.target)
      disintegrate.createSimultaneousParticles(disObj)
      e.target.removeEventListener();
    }
  });

  disintegrate.init()

  document.getElementById("disappear").addEventListener("scroll", e => {
      const disObj = disintegrate.getDisObj(e.target)
      disintegrate.createSimultaneousParticles(disObj)
      e.target.removeEventListener()
  })