import { AnimationInstance } from '@shared/helpers'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class BoxListAnimation extends AnimationInstance {

  setFadeIn(): void {
    const timeline = gsap.timeline({ paused: true })

    timeline.to(this.container.querySelectorAll('.box-list__item'), {
      opacity: 1,
      y: 0,
      ease: 'power2.in',
      stagger: 0.2
    })

    ScrollTrigger.create({
      trigger: this.container,
      start: 'top center',
      end: '50% bottom',
      scrub: 1.5,
      animation: timeline
    })

    this.timelines.push(timeline)
  }

  moveBox() {
    const timeline = gsap.timeline({ paused: true })

    timeline.to(this.container.querySelector('.box-list__item[data-open] .box-list__content'), {
      y: '350%',
      rotate: '130deg',
      ease: 'power2.in',
    })

    ScrollTrigger.create({
      trigger: this.container,
      start: '60% bottom',
      end: 'bottom 110%',
      // markers: true,
      scrub: 0.5,
      animation: timeline
    })
  }
  setTimelines(): void {
    this.setFadeIn()
    this.moveBox()
  }
}
