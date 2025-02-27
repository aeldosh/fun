document.addEventListener('DOMContentLoaded', function () {
    const cakeSection = document.getElementById('cakeSection');
    const specialCakeButton = document.getElementById('specialCakeButton');
    const goBackButton = document.getElementById('goBack');

    if (specialCakeButton) {
        specialCakeButton.addEventListener('click', function () {
            let name = document.getElementById('userName').value.trim();
            let age = parseInt(document.getElementById('userAge').value.trim());
            let candle = document.getElementById('candle');

            if (name && age > 0) {
                cakeSection.style.display = 'block';

                candle.onclick = function () {
                    candle.classList.add('lit');
                    document.getElementById('birthdayMessage').innerText = `Happie ${age} Birthday ${name}!`;
                    document.getElementById('birthdayMessage').style.display = 'block';
                    goBackButton.style.display = 'block';
                };
            } else {
                alert('Please enter a valid name and age.');
            }
        });
    }

    if (goBackButton) {
        goBackButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});
