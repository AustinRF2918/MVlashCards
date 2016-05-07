var ConstructionPassBack = function(selector, parent){
    this.selector = selector;
    this.parent = parent;
}

ConstructionPassBack.prototype.mapDatabase = function(database)
{
        this.parent.internalModel = database;
        return this.parent;
}

var ViewEntity = function(viewParent, model){
    //Relational Dictionaries.
    this.staticDOMRelationsContigDB = {};
    this.staticDOMRelationsAttrQuery = {};
    this.staticDOMRelationsIndexerQuery = {};

    //Attribute lists.
    this.staticDOMRelationsContigDBList = [];
    this.staticDOMRelationsAttrQueryList = [];
    this.staticDOMRelationsIndexerQueryList = [];

    this.viewParent = $("."+viewParent);
    var passBack = new ConstructionPassBack(viewParent, this)
    return passBack;
};

ViewEntity.prototype.newData = function(selector, data, indexFunctor)
{
    //Add data list and functor to call on association.
    this.staticDOMRelationsContigDB[selector] = this.internalModel.showData(data);
    this.staticDOMRelationsContigDBList.push(selector);

    //Append for easy looping
    this.staticDOMRelationsIndexerQuery[selector] = indexFunctor;
    this.staticDOMRelationsIndexerQueryList.push(selector);
}

var ViewPassBack = function(selector, parent, type){
    this.selector = selector;
    this.parent = parent;
    this.type = type;
}

ViewPassBack.prototype.mapFunction = function(attributeFunctor)
{
    if (this.type == 1)
    {
        console.log("Hi");
        this.parent.staticDOMRelationsAttrQuery[this.selector] = attributeFunctor;
    }
    else if (this.type == 2)
    {
        console.log("Hi2");
        this.parent.staticDOMRelationsIndexerQuery[this.selector] = attributeFunctor;
    }
}

ViewPassBack.prototype.mapList = function(listIdentifier)
{
    if (this.type == 2)
    {
        console.log("WARNING: You passed something that I expeceted to be a simple attirbute to a list type. Please check your code.");

    }
    else
    {
        this.parent.staticDOMRelationsContigDB[this.selector] = this.parent.internalModel.select(listIdentifier);
        this.parent.staticDOMRelationsContigDBList.push(this.selector);
        delete this.parent.staticDOMRelationsAttrQuery[this.selector];
        this.parent.staticDOMRelationsAttrQueryList.pop();
        var viewPassBack = new ViewPassBack(this.selector, this.parent, 2);
        return viewPassBack;
    }
}

ViewEntity.prototype.newMap = function(selector)
{
    //We might push a attribute.
    this.staticDOMRelationsAttrQuery[selector] = '';

    //Append for easy looping
    this.staticDOMRelationsAttrQueryList.push(selector);

    var viewPassBack = new ViewPassBack(selector, this, 1);
    return viewPassBack;
}

ViewEntity.prototype.startFunction = function()
{
    //Cache old data here.
}

ViewEntity.prototype.endFunction = function()
{
    for (let selector of this.staticDOMRelationsContigDBList)
    {
	var indexValue = this.staticDOMRelationsIndexerQuery[selector]();
	$(selector).html(this.staticDOMRelationsContigDB[selector][indexValue]);
    }

    for (let selector of this.staticDOMRelationsAttrQueryList)
    {
	$(selector).html(this.staticDOMRelationsAttrQuery[selector]);
    }
};

ViewEntity.prototype.init = function()
{
    appInit();
    this.endFunction();
};
