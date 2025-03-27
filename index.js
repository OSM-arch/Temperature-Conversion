function Convert() 
{
    const nbr = Number(document.getElementById('nbr').value);
    const CelToFar = document.getElementById('CelToFar');
    const FarToCel = document.getElementById('FarToCel');
    let result = document.getElementById('result');
    result.innerHTML = "";

    if (isNaN(nbr)) result.innerHTML = 'Please enter a valid number. The value you provided is not a number.';
    else
    {
        if (CelToFar.checked) {
            let F = (nbr * 9 / 5) + 32;
            if (F < 32) {
                result.style.color = "#00008B";
            } else if (F >= 32 && F < 50) {
                result.style.color = "#ADD8E6";
            } else if (F >= 50 && F < 68) {
                result.style.color = "#90EE90";
            } else if (F >= 68 && F < 86) {
                result.style.color = "#FFFF00";
            } else if (F >= 86 && F < 104) {
                result.style.color = "#FFA500";
            } else if (F >= 104) {
                result.style.color = "#FF0000";
            }
            result.innerHTML = F.toFixed(2) + ' °F';
        } else if (FarToCel.checked) {
            let C = (nbr - 32) * (5 / 9);
            if (C < 0) {
                result.style.color = "#00008B";
            } else if (C >= 0 && C < 10) {
                result.style.color = "#ADD8E6";
            } else if (C >= 10 && C < 20) {
                result.style.color = "#90EE90";
            } else if (C >= 20 && C < 30) {
                result.style.color = "#FFFF00";
            } else if (C >= 30 && C < 40) {
                result.style.color = "#FFA500";
            } else if (C >= 40) {
                result.style.color = "#FF0000";
            }
            result.innerHTML = C.toFixed(2) + ' °C';
        }
    }
}

function effacer()
{   
    document.getElementById('nbr').value = 0;
    document.getElementById('result').innerHTML = "";
    const radioButtons = document.querySelectorAll('input[name="c"]');
    radioButtons.forEach(radio => {radio.checked = false;})
}