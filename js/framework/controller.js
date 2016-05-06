//Controller functions that our entities
//will be able to use to do logic.

//Controller Local Variables.
var counterVar = 0;
var buttonClicks = 0;
var currentText = "Title";

//Controller Logic.
//  //Our controller requires simple gets like this
    //because I never implemented the ability to map
    //functions as closures. That is a feature that
    //would actually be really useful.
//
	var getTitle = function(){
	    return currentText;
	};

	var getCounter = function(){
	    return counterVar;
	};

	var getTotal = function(){
	    return 5;
	};

	var incrementCounter = function(){
	    if (counterVar < getTotal())
	    {
		counterVar = counterVar + 1;
	    }
	};

    var hideAnswer = function(){
        $('#data-CurrentAnswer').hide();
    }

    var showAnswer = function(){
        $('#data-CurrentAnswer').show();
    }

    $('.btn-bad, .btn-soso, .btn-good, .btn-great').click(function(){
        {
            if (buttonClicks == 0)
            {
                view.startFunction();
                    buttonClicks = 1;
                    if (counterVar == getTotal())
                    {
                        console.log(counterVar);
                        currentText = "Done";
                        $('p#data-CurrentText').hide();
                        $('p#data-CurrentAnswer').hide();
                    }
                    else
                    {
                        showAnswer();
                    }

                view.endFunction();
            }
            else if (buttonClicks == 1)
            {
                    view.startFunction();
                    buttonClicks = 0;
                    hideAnswer();
                    incrementCounter();
                    if (counterVar == getTotal())
                    {
                        console.log(counterVar);
                        currentText = "Done";
                        $('p#data-CurrentText').hide();
                        $('p#data-CurrentAnswer').hide();
                    }
                view.endFunction();

            }

        }
    })


    var appInit = function()
    {
        hideAnswer();
    }
