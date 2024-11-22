import { AnimationInstance } from '@shared/helpers'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class OpenedBoxAnimation extends AnimationInstance {

  moveAnimation() {
    const timeline = gsap.timeline({ paused: true })

    timeline.to(this.container.querySelector('.opened-box__item'), {
      y: '-50%',
      x: '-50%',
      rotate: '360deg',
    })

    ScrollTrigger.create({
      trigger: this.container,
      start: 'top 110%',
      end: 'top 25%',
      scrub: 0.5,
      animation: timeline
    })

    this.timelines.push(timeline)
  }

  setOpenAnimation(): void {
    const timeline = gsap.timeline({ paused: true })


    timeline.to(this.container.querySelector('.opened-box__item'), {
      width: '100%',
      height: '100vh'
    }).to(this.container.querySelectorAll('.opened-box__bg'), {
      rotateX: '0deg',
      stagger: 0.2
    })

    ScrollTrigger.create({
      trigger: this.container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5,
      animation: timeline
    })

    this.timelines.push(timeline)
  }
  setTimelines(): void {
    this.moveAnimation()
    this.setOpenAnimation()
  }
}
