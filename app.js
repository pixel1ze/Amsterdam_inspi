barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          x: 100,
          scale: 0
        });
      },
      enter(data) {
        return gsap.to(data.next.container, {
          x: -100,
          opacity: 0
        });
      }
    }
  ]
});
