function load()
{
    console.log("Load succesfully called.");
    var docHead = document.getElementsByTagName("head")[0];

    var model = document.createElement('script');
    model.src = 'js/framework/model.js';
    model.type = 'text/javascript';

    var view = document.createElement('script');
    view.src = 'js/framework/view.js';
    view.type = 'text/javascript';

    var controller = document.createElement('script');
    controller.src = 'js/framework/controller.js';
    controller.type = 'text/javascript';

    docHead.appendChild(model);
    docHead.appendChild(view);
    docHead.appendChild(controller);
}

