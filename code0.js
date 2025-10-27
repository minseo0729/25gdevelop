gdjs.playCode = {};
gdjs.playCode.localVariables = [];
gdjs.playCode.idToCallbackMap = new Map();
gdjs.playCode.GDbgObjects1= [];
gdjs.playCode.GDbgObjects2= [];
gdjs.playCode.GDplatformObjects1= [];
gdjs.playCode.GDplatformObjects2= [];
gdjs.playCode.GDplayerObjects1= [];
gdjs.playCode.GDplayerObjects2= [];
gdjs.playCode.GDGold_9595CoinObjects1= [];
gdjs.playCode.GDGold_9595CoinObjects2= [];
gdjs.playCode.GD_9548268_9547112Objects1= [];
gdjs.playCode.GD_9548268_9547112Objects2= [];
gdjs.playCode.GDscoreObjects1= [];
gdjs.playCode.GDscoreObjects2= [];
gdjs.playCode.GDscore_9595textObjects1= [];
gdjs.playCode.GDscore_9595textObjects2= [];
gdjs.playCode.GDNewSprite2Objects1= [];
gdjs.playCode.GDNewSprite2Objects2= [];


gdjs.playCode.mapOfGDgdjs_9546playCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.playCode.GDplayerObjects1});
gdjs.playCode.mapOfGDgdjs_9546playCode_9546GD_95959548268_95959547112Objects1Objects = Hashtable.newFrom({"벌레": gdjs.playCode.GD_9548268_9547112Objects1});
gdjs.playCode.mapOfGDgdjs_9546playCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.playCode.GDplayerObjects1});
gdjs.playCode.mapOfGDgdjs_9546playCode_9546GDGold_95959595CoinObjects1Objects = Hashtable.newFrom({"Gold_Coin": gdjs.playCode.GDGold_9595CoinObjects1});
gdjs.playCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.playCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10880004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.playCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.playCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.playCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.playCode.GDplayerObjects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.playCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10880892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.playCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.playCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.playCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.playCode.GDplayerObjects1[i].getBehavior("Animation").getAnimationIndex() + (0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.playCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.playCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.playCode.GDplayerObjects1[i].getY() > 1080 ) {
        isConditionTrue_0 = true;
        gdjs.playCode.GDplayerObjects1[k] = gdjs.playCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.playCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.playCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.playCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.playCode.GDplayerObjects1[i].setPosition(-(316),828);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.playCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("벌레"), gdjs.playCode.GD_9548268_9547112Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.playCode.mapOfGDgdjs_9546playCode_9546GDplayerObjects1Objects, gdjs.playCode.mapOfGDgdjs_9546playCode_9546GD_95959548268_95959547112Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.playCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.playCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.playCode.GDplayerObjects1[i].setPosition(-(316),828);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gold_Coin"), gdjs.playCode.GDGold_9595CoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.playCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.playCode.mapOfGDgdjs_9546playCode_9546GDplayerObjects1Objects, gdjs.playCode.mapOfGDgdjs_9546playCode_9546GDGold_95959595CoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.playCode.GDGold_9595CoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score_text"), gdjs.playCode.GDscore_9595textObjects1);
{for(var i = 0, len = gdjs.playCode.GDGold_9595CoinObjects1.length ;i < len;++i) {
    gdjs.playCode.GDGold_9595CoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}
{for(var i = 0, len = gdjs.playCode.GDscore_9595textObjects1.length ;i < len;++i) {
    gdjs.playCode.GDscore_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.playCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.playCode.GDbgObjects1.length = 0;
gdjs.playCode.GDbgObjects2.length = 0;
gdjs.playCode.GDplatformObjects1.length = 0;
gdjs.playCode.GDplatformObjects2.length = 0;
gdjs.playCode.GDplayerObjects1.length = 0;
gdjs.playCode.GDplayerObjects2.length = 0;
gdjs.playCode.GDGold_9595CoinObjects1.length = 0;
gdjs.playCode.GDGold_9595CoinObjects2.length = 0;
gdjs.playCode.GD_9548268_9547112Objects1.length = 0;
gdjs.playCode.GD_9548268_9547112Objects2.length = 0;
gdjs.playCode.GDscoreObjects1.length = 0;
gdjs.playCode.GDscoreObjects2.length = 0;
gdjs.playCode.GDscore_9595textObjects1.length = 0;
gdjs.playCode.GDscore_9595textObjects2.length = 0;
gdjs.playCode.GDNewSprite2Objects1.length = 0;
gdjs.playCode.GDNewSprite2Objects2.length = 0;

gdjs.playCode.eventsList0(runtimeScene);
gdjs.playCode.GDbgObjects1.length = 0;
gdjs.playCode.GDbgObjects2.length = 0;
gdjs.playCode.GDplatformObjects1.length = 0;
gdjs.playCode.GDplatformObjects2.length = 0;
gdjs.playCode.GDplayerObjects1.length = 0;
gdjs.playCode.GDplayerObjects2.length = 0;
gdjs.playCode.GDGold_9595CoinObjects1.length = 0;
gdjs.playCode.GDGold_9595CoinObjects2.length = 0;
gdjs.playCode.GD_9548268_9547112Objects1.length = 0;
gdjs.playCode.GD_9548268_9547112Objects2.length = 0;
gdjs.playCode.GDscoreObjects1.length = 0;
gdjs.playCode.GDscoreObjects2.length = 0;
gdjs.playCode.GDscore_9595textObjects1.length = 0;
gdjs.playCode.GDscore_9595textObjects2.length = 0;
gdjs.playCode.GDNewSprite2Objects1.length = 0;
gdjs.playCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['playCode'] = gdjs.playCode;
