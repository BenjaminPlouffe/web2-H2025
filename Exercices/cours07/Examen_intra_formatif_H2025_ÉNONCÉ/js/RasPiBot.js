
import {getRasDescription, getArduinoDescription, getMicrobitDescription} from "./descriptions";

document.addEventListener('DOMContentLoaded', () => {
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
    dataChoice--
    if (_dataChoice < 1) {
        _dataChoice = 3;
    }
    changeCarrouse(_dataChoice)
    return _dataChoice
}

function changeCarrouse(_dataChoice) {
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