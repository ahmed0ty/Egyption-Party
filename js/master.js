

$('.open').hide()
$('i').click(function () {
    $('.open').animate({ width: 'toggle' });
})


$('.child-1').click(function() {
    var child2 = $(this).next('.child-2');

    $('.child-2').not(child2).slideUp(1000);

    child2.slideToggle(1000);
});
$('.parent .child-2').hide().eq(0).show();



var targetDate = new Date('2025/7/10').getTime();

var countdownInterval = setInterval(function () {

    var now = new Date().getTime();

    var distance = targetDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days').text(days + ' D');
    $('#hours').text(hours + ' h');
    $('#minutes').text(minutes + ' m');
    $('#seconds').text(seconds + ' s');

    if (distance < 0) {
        clearInterval(countdownInterval);
        $('#days').text('Expired');
        $('#hours').text('');
        $('#minutes').text('');
        $('#seconds').text('');
    }
}, 1000);

document.addEventListener('DOMContentLoaded', function () {

    var messageInput = document.getElementById('message');
    var remainingChars = document.getElementById('remainingChars');
    var errorMessage = document.getElementById('errorMessage');
    var sendMessageButton = document.getElementById('sendMessage');


    var maxChars = 100;


    messageInput.addEventListener('input', function () {

        var charsUsed = messageInput.value.length;
        var charsRemaining = maxChars - charsUsed;

        remainingChars.textContent = charsRemaining;


        if (charsRemaining < 0) {

            errorMessage.classList.remove('d-none');
            sendMessageButton.disabled = true;
        } else {

            errorMessage.classList.add('d-none');
            sendMessageButton.disabled = false;
        }
    });
});