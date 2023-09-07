'use strict'
{
  class Slot {
    constructor(id) {
      const divElement = document.createElement('div')
      divElement.classList.add('slot-panel')

      this.img = document.createElement('img')
      this.img.src = 'bell.png'

      this.stop = document.createElement('button')
      this.stop.textContent = 'STOP'

      divElement.appendChild(this.img)
      divElement.appendChild(this.stop)
      const slotBodyElement = document.getElementById(id)
      slotBodyElement.appendChild(divElement)
    }

    start() {
      const spin = document.getElementById('spin')
      spin.addEventListener('click', () => {
        let intervalID = this.spinningSlot(this.img)
        this.addStopProcess(this.stop, intervalID)
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
  const slots = [new Slot('slot'), new Slot('slot'), new Slot('slot')]
  slots.forEach((slot) => {
    slot.start()
  })
}
