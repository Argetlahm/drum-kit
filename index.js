// var audiotom = new Audio('sounds/tom-1.mp3')

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    playSound(this.innerHTML)
    animateButton(this.innerHTML)


  })
}

document.addEventListener('keypress',function(e){
  playSound(e.key)
  animateButton(e.key)
})

function animateButton(keySelected){
  var targetClass = document.querySelector('.' + keySelected)
  targetClass.classList.add("pressed")
  setTimeout(function(){
    targetClass.classList.remove("pressed")
  },100)
}

function playSound(soundCode){
  var buttonExpression = soundCode
  switch (buttonExpression) {
    case 'w':
        var crash = new Audio('sounds/crash.mp3')
        crash.play()
      break;
      case 'a':
          var kick = new Audio('sounds/kick-bass.mp3')
          kick.play()
        break;
        case 's':
            var snare = new Audio('sounds/snare.mp3')
            snare.play()
          break;
          case 'd':
              var tom1 = new Audio('sounds/tom-1.mp3')
              tom1.play()
            break;
            case 'j':
                var tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play()
              break;
              case 'k':
                  var tom3 = new Audio('sounds/tom-3.mp3')
                  tom3.play()
                break;
                case 'l':
                    var tom4 = new Audio('sounds/tom-4.mp3')
                    tom4.play()
                  break;

    default:
    console.log(buttonExpression)
    break;
  }
}


// var audiotom = new Audio('sounds/tom-1.mp3')
// audiotom.play()
