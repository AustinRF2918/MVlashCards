//Create general database schema our model.
var cards = new ModelPortion(["questions", "answers"]);

//Initialize database with our single database schema.
var model = new ModelEntity([cards], true);

//Add data to our model.
var german = 'In der Theorie klingt es ganz einfach: "Idomeni wird geschlossen. Punkt", sagt Tzanetos Filippakos aus dem griechischen Innenministerium zu SPIEGEL ONLINE. In der Realität will kaum einer der mehr als 10.000 Flüchtlinge in den verwahrlosten Camps an der griechisch-mazedonischen Grenze seinen Platz räumen.';

var words = ['der', 'Theorie', 'einfach', 'kaum'];
var definition = ["Denk an the", "Albert Einstein", "Es ist ganz einfach..", "Der type von Mathe."];
for (var n = 0; n < definition.length; n++)
{
    definition[n] = definition[n].split(' ').join('&nbsp;');
    console.log(definition[n]);
}
var answer = ['the', 'theory', 'simple', 'hardly'];

for (var n = 0; n < words.length; n++)
{
    model.select("questions").push(german.replace(words[n], '<span class="tooltip" data-tip=' + definition[n].toString() + '>_____</span>'));
    console.log(definition[n]);
    model.select("answers").push(answer[n]);
}

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
