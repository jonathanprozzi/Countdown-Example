(function () {

    // set variables for all the necessary html elements

    var inputRange = document.getElementById('input-range');
    var divValue = document.getElementById('div-value');
    var secValue = document.getElementById('sec-value');
    var engager = document.getElementById('engager');
    var statusDiv = document.getElementById('status-display');
    var countVal = Number(inputRange.value);
    var statSpan = document.getElementById('stat-span');
    secValue.innerHTML = inputRange.value;

    // hide the 'status' once the page loads

    window.addEventListener('load', function(){
        console.log('loaded! / hiding status!');
        statusDiv.style.display = 'none';
    });

    console.log('initial value: ' + inputRange.value); // check the initial value via console

    /*
        listen for the 'input' event on the input range slider
        log the value to the console to check to make sure changes are reflected
        then set the display in the div
        finally, return back the value so that the changed value can be used elsewhere
    */

    inputRange.addEventListener('input', function() {
        console.log('current value: ' + inputRange.value);
        secValue.innerHTML = inputRange.value;
        countVal = Number(inputRange.value);
        return countVal;
    });

    /*
        this is the countdown function- it's got a few aspects going on
        first, make it tickdown when the current count > 0, log the value to check it
        and then display it on the display
        next, monitor for when the count is 0 so that something happens.
    */

    function theCount() {
        function onTick() {
            if (countVal > 0) {
                countVal--;
                console.log('test subtract : ' + countVal);
                secValue.innerHTML = countVal;
                if (countVal === 0) {
                    statSpan.innerHTML = '[Time at Zero!]';
                    engager.innerHTML = 'Engage!';
                    inputRange.style.display = 'block';
                    console.log('oh no!');
                }
            }
        }
            var countInterval = setInterval(onTick, 1000);
            return countVal;
    }

    /*
        add the event listener for the click on the start button
        hide the input slider so that the timer value can't be changed while going
        and then display the Status: display
    */

    engager.addEventListener('click', function(){
        var countVal = Number(inputRange.value);
        statSpan.innerHTML = '[Engaged!]';
        engager.innerHTML = 'Disengage!';
        console.log('engaged!');
        console.log('[???] happens in... ' + inputRange.value + ' seconds!');
        console.log('test to num: ' + inputRange.value);
        inputRange.style.display = 'none';
        statusDiv.style.display = 'block';
        theCount();
    });

})();
