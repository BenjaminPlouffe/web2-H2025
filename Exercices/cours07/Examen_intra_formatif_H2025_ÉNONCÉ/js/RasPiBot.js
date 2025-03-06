
import {getRasDescription, getArduinoDescription, getMicrobitDescription} from "./descriptions";

window.addEventListener('load', () => {
    let dataChoice = 1;
    const suivantBoutton = document.getElementById('btnNextChoice');
    const precedentBoutton = document.getElementById('btnPreviousChoice');
    dataChoice = suivantBoutton.addEventListener('click', changementMenuSuivant(dataChoice));
    dataChoice = precedentBoutton.addEventListener('click', changementMenuPrecedent(dataChoice));

})

function changementMenuSuivant(_dataChoice){
    _dataChoice++;
    if (_dataChoice > 3) {
        _dataChoice = 1;
    }
    changeCarrouse(_dataChoice)
    return _dataChoice
}

function changementMenuPrecedent(_dataChoice){
    _dataChoice--
    if (_dataChoice < 1) {
        _dataChoice = 3;
    }
    changeCarrouse(_dataChoice)
    return _dataChoice
}

function changeCarrouse(_dataChoice) {
    console.log(_dataChoice);
    let title = document.getElementById('title');
    let logo = document.getElementById('logo');
    let divDescription = document.getElementById('divDescription');
    const divForm = document.getElementById('divForm');
    const image = document.getElementById('image');
    switch (_dataChoice) {
        case 1:
            
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            break;
    }    
}