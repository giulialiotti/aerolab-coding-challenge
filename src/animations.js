import { gsap } from "gsap";

export const animateWalkthroughCards = (
  cardsWrapperRef,
  cardOneRef,
  cardThreeRef
) => {
  gsap.defaults({ duration: 1 });

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: cardsWrapperRef.current,
      start: "top 90%",
    },
  });

  timeline
    .from(cardsWrapperRef.current, { yPercent: 50 })
    .fromTo(cardOneRef.current, { xPercent: 100 }, { xPercent: 0 }, "<")
    .fromTo(cardThreeRef.current, { xPercent: -100 }, { xPercent: 0 }, "<");

  const killAnimation = () => {
    timeline.scrollTrigger.kill(true);
    timeline.pause(0).kill(true);
  };

  return () => killAnimation();
};
