//Create general database schema our model.
var cards = new ModelPortion(["questions", "answers"]);

//Initialize database with our single database schema.
var model = new ModelEntity([cards], true);

//Add data to our model.
model.select("questions").push("Hello World");
model.select("answers").push("Hi!");
model.select("questions").push("Hello Me");
model.select("answers").push("ai!");
model.select("questions").push("Hello You");
model.select("answers").push("bi!");
model.select("questions").push("Hello Everyone");
model.select("answers").push("ci!");
model.select("questions").push("Hello It");
model.select("answers").push("di!");

//Hook our view to a certain overlying div.
var view = new ViewEntity("view-entity").mapDatabase(model);


//Link together selectors from the DOM to a variable.
view.newMap("h2#attribute-Title").mapFunction(getTitle);
view.newMap("span#attribute-cq").mapFunction(getCounter);
view.newMap("span#attribute-tq").mapFunction(getTotal);
view.newMap("p#data-CurrentText").mapList("questions").mapFunction(getCounter);
view.newMap("p#data-CurrentAnswer").mapList("answers").mapFunction(getCounter);

//Initialize view to do one round of logic.
view.init();
