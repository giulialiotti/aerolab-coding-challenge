import { gsap } from "gsap";

export const animateWalkthroughCards = (refs) => {
    gsap.defaults({ duration: 1 });

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.cardsWrapperRef.current,
        start: "top 90%"
      },
    });

    timeline
      .from(refs.cardsWrapperRef.current, { yPercent: 50 })
      .fromTo(refs.cardOneRef.current, { xPercent: 100 }, { xPercent: 0 }, "<")
      .fromTo(
        refs.cardThreeRef.current,
        { xPercent: -100 },
        { xPercent: 0 },
        "<"
      );
}