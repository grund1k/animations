import { resizeObserver } from '.'
import gsap from 'gsap'

export class AnimationInstance {
  public container: HTMLElement | null
  public timelines: gsap.core.Timeline[]
  private vpTouch: MediaQueryList
  private vp767: MediaQueryList

  constructor(container: HTMLElement | null) {
    this.container = container
    if (!this.container) {
      return
    }

    this.timelines = []
    this.vpTouch = window.matchMedia('(pointer: coarse)')
    this.vp767 = window.matchMedia('(max-width: 767px)')
  }

  private removeTimelines(): void {
    this.timelines.forEach((timeline) => {
      timeline.seek(0).kill()
    })
    this.timelines = []
  }

  public setTimelines(): void {
    const timeline = gsap.timeline({ paused: true })
    this.timelines.push(timeline)
  }

  private resize(): void {
    if (this.timelines.length) {
      this.removeTimelines()
    }

    this.setTimelines()
  }

  public init(): void {
    if (!this.container) {
      return
    }
    this.resize()
    resizeObserver.subscribe(this.resize.bind(this))
  }
}
