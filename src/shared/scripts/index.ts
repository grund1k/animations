import { mobileVhFix } from '@shared/helpers'
import { initScaling } from '@shared/helpers/_scalling'

mobileVhFix()
document.addEventListener(
  'DOMContentLoaded',
  () => {
    initScaling()
  },
  true
)
