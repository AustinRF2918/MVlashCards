//Controller functions that our entities
//will be able to use to do logic.

//Controller Local Variables.
var counterVar = 0;
var buttonClicks = 0;
var buttonClicksCP = 0;
var currentText = "Lager an griechischer Grenze";

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
        $('#data-CurrentAnswer').fadeIn().hide();
    }

    var showAnswer = function(){
        $('#data-CurrentAnswer').fadeIn().show();
    }

    var hideSettings  = function(){
        setTimeout(function(){ $('#settings-mini-container').velocity("transition.bounceUpIn")}, 500);
        setTimeout(function(){ $('#settings-container').velocity("transition.bounceDownOut")}, 0);

    }

    var showSettings = function(){
        setTimeout(function(){ $('#settings-container').velocity("transition.bounceDownIn")}, 500);
        setTimeout(function(){ $('#settings-mini-container').velocity("transition.bounceUpOut")}, 0);
    }

    $('.btn-close').click(function(){
        if (buttonClicksCP == 0)
        {
            view.startFunction();
                buttonClicksCP = 1;
                hideSettings();
            view.endFunction();
        }
        else
        {
            view.startFunction();
                buttonClicksCP = 0;
                showSettings();
            view.endFunction();
        }
    });

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
                        $('p#data-CurrentText').fadeOut().hide();
                        $('p#data-CurrentAnswer').fadeOut().hide();
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
                        $('p#data-CurrentText').fadeOut().hide();
                        $('p#data-CurrentAnswer').fadeOut().hide();
                    }
                view.endFunction();

            }

        }
    })


    var appInit = function()
    {
        hideAnswer();
    }
