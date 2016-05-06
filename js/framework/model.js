var ModelPortion = function(fContent)
{
    this.portion = {"fContent" : []};

    for (var i = 0; i < fContent.length; i++)
    {
        this.portion["fContent"].push(fContent[i]);
    }

};

var ModelEntity = function(subEntities, debug)
{
    this.modelData = {};
    for (var entityIndex = 0; entityIndex < subEntities.length; entityIndex++)
    {
	if (subEntities[0]["portion"]["fContent"] != undefined)
        {
            for (let data of subEntities[0]["portion"]["fContent"])
            {
            this.modelData[data] = [];
            }
        }
    }
};

ModelEntity.prototype.select = function(dataSelector, content)
{
    return this.modelData[dataSelector];
};
