let deferredPrompt

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault()
  deferredPrompt = event
  console.log(event)
})

document.getElementById("installButton").addEventListener("click", installApp)

function installApp() {
  if (!deferredPrompt) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && navigator.share) {
      let varUA = navigator.userAgent.toLowerCase()
      if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
        alert('사파리에서 "공유하기"에서 "홈 화면에 추가"를 통해 설치하실 수 있습니다.')
        return
      }
    }
    alert("이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다.")
    return
  }

  deferredPrompt.prompt()
}
