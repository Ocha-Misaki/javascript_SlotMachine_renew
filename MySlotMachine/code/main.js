'use strict'
{
  class Slot {
    constructor(id, num) {
      this.reels = []
      for (let i = 0; i < num; i++) {
        const divElement = document.createElement('div')
        divElement.classList.add('slot-panel')

        const img = document.createElement('img')
        img.src = 'bell.png'

        const stop = document.createElement('button')
        stop.textContent = 'STOP'
        this.reels.push({ imageEl: img, stopEl: stop })

        divElement.appendChild(img)
        divElement.appendChild(stop)
        const slotBodyElement = document.getElementById(id)
        slotBodyElement.appendChild(divElement)
      }
    }

    start() {
      const spin = document.getElementById('spin')
      spin.addEventListener('click', () => {
        this.reels.forEach((reel) => {
          let intervalID = this.spinningSlot(reel.imageEl)
          this.addStopProcess(reel.stopEl, intervalID)
        })
      })
    }
    spinningSlot(img) {
      let intervalID = setInterval(() => {
        img.src = this.switchImage()
      }, 10)
      return intervalID
    }

    switchImage = () => {
      const imgArray = ['cherry.png', 'bell.png', 'seven.png']
      return imgArray[Math.floor(Math.random() * imgArray.length)]
    }

    addStopProcess = (element, intervalID) => {
      element.addEventListener('click', () => {
        clearInterval(intervalID)
      })
    }
  }

  const slot = new Slot('slot', 3)
  slot.start()
}
