var btn = []
var setPropertiesButton
var classDropDown
var getClass
var levelDropdown
var getLevel

function useSpellSlot() {
  /*reduce button text on click
   */
  this.innerHTML--
  if (this.innerHTML < 0) {
    this.innerHTML = 0
  }
}

function setProperties() {
  /*set properties based on level and character class
   */
  classDropDown = document.getElementById('player-class')
  levelDropdown = document.getElementById('player-level')

  getClass = classDropDown.options[classDropDown.selectedIndex].value
  getLevel = levelDropdown.options[levelDropdown.selectedIndex].value

  console.log(getLevel, getClass)

  /*check for character class and level then set the spell slot numbers
   */

  switch (getClass) {
    case 'wizard':
      switch (getLevel) {
        case '1':
          btn[0].innerHTML = 2
          break;
        case '2':
          btn[0].innerHTML = 3
          break;
        case '3':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 2
          break;
        case '4':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          break;
        case '5':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 2
          break;
        case '6':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          break;
        case '7':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 1
          break;
        case '8':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 2
          break;
        case '9':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 1
          break;
        case '10':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          break;
        case '11':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          btn[5].innerHTML = 1
          break;
        case '12':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          btn[5].innerHTML = 1
          break;
        case '13':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          btn[5].innerHTML = 1
          btn[6].innerHTML = 1
          break;
        case '14':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          btn[5].innerHTML = 1
          btn[6].innerHTML = 1
          break;
        case '15':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          btn[5].innerHTML = 1
          btn[6].innerHTML = 1
          btn[7].innerHTML = 1
          break;
        case '16':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          btn[5].innerHTML = 1
          btn[6].innerHTML = 1
          btn[7].innerHTML = 1
          break;
        case '17':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 2
          btn[5].innerHTML = 1
          btn[6].innerHTML = 1
          btn[7].innerHTML = 1
          btn[8].innerHTML = 1
          break;
        case '18':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 3
          btn[5].innerHTML = 1
          btn[6].innerHTML = 1
          btn[7].innerHTML = 1
          btn[8].innerHTML = 1
          break;
        case '19':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 3
          btn[5].innerHTML = 2
          btn[6].innerHTML = 1
          btn[7].innerHTML = 1
          btn[8].innerHTML = 1
          break;
        case '20':
          btn[0].innerHTML = 4
          btn[1].innerHTML = 3
          btn[2].innerHTML = 3
          btn[3].innerHTML = 3
          btn[4].innerHTML = 3
          btn[5].innerHTML = 2
          btn[6].innerHTML = 2
          btn[7].innerHTML = 1
          btn[8].innerHTML = 1
          break;
        default:
      } //end of wizard level switch
      break;
    case 'warlock':
      switch (getLevel) {
        case '1':
          btn[0].innerHTML = 1
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '2':
          btn[0].innerHTML = 2
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '3':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 2
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '4':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 2
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '5':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 2
          btn[3].innerHTML = 0
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '6':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 2
          btn[3].innerHTML = 0
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '7':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 2
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '8':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 2
          btn[4].innerHTML = 0
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '9':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 2
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '10':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 2
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '11':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 3
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '12':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 3
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '13':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 3
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '14':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 3
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '15':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 3
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '16':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 3
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '17':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 4
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '18':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 4
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '19':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 4
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        case '20':
          btn[0].innerHTML = 0
          btn[1].innerHTML = 0
          btn[2].innerHTML = 0
          btn[3].innerHTML = 0
          btn[4].innerHTML = 4
          btn[5].innerHTML = 0
          btn[6].innerHTML = 0
          btn[7].innerHTML = 0
          btn[8].innerHTML = 0
          break;
        default:
      } //end of warlock level switch
    default:

  } //end of character class switch
} //end of setProperties

setPropertiesButton = document.getElementById('set-properties')
setPropertiesButton.addEventListener('click', setProperties)

for (let i = 0; i <= 8; i++) {
  btn[i] = document.getElementsByName("button")[i]
  btn[i].addEventListener("click", useSpellSlot)
}

/*if(getLevel==1 && getClass=='wizard'){
  btn[0].innerHTML = 2
}
*/
