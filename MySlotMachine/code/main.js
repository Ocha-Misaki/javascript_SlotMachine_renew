'use strict'
{
  const createElement = (imgID, stopID) => {
    const divElement = document.createElement('div')
    divElement.classList.add('slot-panel')

    const img = document.createElement('img')
    img.src = 'bell.png'
    img.setAttribute('id', imgID)

    const stop = document.createElement('button')
    stop.setAttribute('id', stopID)
    stop.textContent = 'STOP'

    divElement.appendChild(img)
    divElement.appendChild(stop)

    const slotBodyElement = document.querySelector('div')
    slotBodyElement.appendChild(divElement)
  }
  createElement('img1', 'stop1')
  createElement('img2', 'stop2')
  createElement('img3', 'stop3')

  const img1 = document.getElementById('img1')
  const img2 = document.getElementById('img2')
  const img3 = document.getElementById('img3')

  const spin = document.getElementById('spin')
  const stop1 = document.getElementById('stop1')
  const stop2 = document.getElementById('stop2')
  const stop3 = document.getElementById('stop3')

  //spinボタンを押してスロットを回す時の処理
  spin.addEventListener('click', () => {
    let intervalID1 = spinningSlot(img1)
    let intervalID2 = spinningSlot(img2)
    let intervalID3 = spinningSlot(img3)
    addStopProcess(stop1, intervalID1)
    addStopProcess(stop2, intervalID2)
    addStopProcess(stop3, intervalID3)
  })

  //一定時間おきに画像を切り替える
  const spinningSlot = (img) => {
    let intervalID = setInterval(() => {
      img.src = switchImage()
    }, 10)
    return intervalID
  }

  const switchImage = () => {
    const imgArray = ['cherry.png', 'bell.png', 'seven.png']
    return imgArray[Math.floor(Math.random() * imgArray.length)]
  }

  const addStopProcess = (element, intervalID) => {
    element.addEventListener('click', () => {
      clearInterval(intervalID)
    })
  }
}
