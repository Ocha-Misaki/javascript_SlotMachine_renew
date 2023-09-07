'use strict'
{
  class Slot {
    constructor(id, num) {
      for (let i = 0; i < num; i++) {
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
    }
  }

  new Slot('slot', 6)
}
