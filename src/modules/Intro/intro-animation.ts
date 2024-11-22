import { AnimationInstance } from '@shared/helpers'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class IntroAnimation extends AnimationInstance {
  setTimelines(): void {
    const timeline = gsap.timeline({ paused: true })

    timeline.to(this.container.querySelector('.intro__bg'), {
      clipPath: 'circle(100% at 50% 50%)',
      ease: 'circ.inOut'
    })

    ScrollTrigger.create({
      trigger: this.container,
      start: 'top center',
      end: 'bottom center',
      scrub: 1.5,
      animation: timeline
    })

    this.timelines.push(timeline)
  }
}
