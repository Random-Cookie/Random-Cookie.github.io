gdjs.MainCode = {};
gdjs.MainCode.GDFloorObjects1= [];
gdjs.MainCode.GDFloorObjects2= [];
gdjs.MainCode.GDFloorObjects3= [];
gdjs.MainCode.GDCharacterObjects1= [];
gdjs.MainCode.GDCharacterObjects2= [];
gdjs.MainCode.GDCharacterObjects3= [];
gdjs.MainCode.GDStartButtonObjects1= [];
gdjs.MainCode.GDStartButtonObjects2= [];
gdjs.MainCode.GDStartButtonObjects3= [];
gdjs.MainCode.GDObstacleObjects1= [];
gdjs.MainCode.GDObstacleObjects2= [];
gdjs.MainCode.GDObstacleObjects3= [];
gdjs.MainCode.GDguideObjects1= [];
gdjs.MainCode.GDguideObjects2= [];
gdjs.MainCode.GDguideObjects3= [];
gdjs.MainCode.GDTimerObjects1= [];
gdjs.MainCode.GDTimerObjects2= [];
gdjs.MainCode.GDTimerObjects3= [];
gdjs.MainCode.GDTimerBackgroundObjects1= [];
gdjs.MainCode.GDTimerBackgroundObjects2= [];
gdjs.MainCode.GDTimerBackgroundObjects3= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};


gdjs.MainCode.eventsList0x6aaabc = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 10);
}
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) < 10.1);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.MainCode.GDTimerObjects2.createFrom(gdjs.MainCode.GDTimerObjects1);

{for(var i = 0, len = gdjs.MainCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDTimerObjects2[i].setX(36);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 100);
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDTimerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTimerObjects1[i].setX(0);
}
}}

}


}; //End of gdjs.MainCode.eventsList0x6aaabc
gdjs.MainCode.eventsList0x71a48c = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == "Endless";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").mul(0.95);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed").add(1);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == "One";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == "Two";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.MainCode.eventsList0x71a48c
gdjs.MainCode.eventsList0x71a2dc = function(runtimeScene) {

{


{
{runtimeScene.getVariables().getFromIndex(0).getChild("level").add(1);
}
{ //Subevents
gdjs.MainCode.eventsList0x71a48c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainCode.eventsList0x71a2dc
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDguideObjects2Objects = Hashtable.newFrom({"guide": gdjs.MainCode.GDguideObjects2});gdjs.MainCode.eventsList0x723cfc = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("guides")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDguideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDguideObjects2Objects, 400 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(132), "");
}}

}


}; //End of gdjs.MainCode.eventsList0x723cfc
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDguideObjects2Objects = Hashtable.newFrom({"guide": gdjs.MainCode.GDguideObjects2});gdjs.MainCode.eventsList0x6bbe4c = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("guides")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDguideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDguideObjects2Objects, 400 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(132), "");
}}

}


}; //End of gdjs.MainCode.eventsList0x6bbe4c
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects2});gdjs.MainCode.eventsList0x70db0c = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("LR")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects, -(560) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(32), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects, 560 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(32), "");
}
{ //Subevents
gdjs.MainCode.eventsList0x723cfc(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("LR")) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects, -(560) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(32), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects, 560 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(32), "");
}
{ //Subevents
gdjs.MainCode.eventsList0x6bbe4c(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("obsType")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDObstacleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects, 160, -(32), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects, -(800), -(232), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects2Objects, 320, -(232), "");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("obsType")) == -(1);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.MainCode.eventsList0x70db0c
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.MainCode.GDCharacterObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects1});gdjs.MainCode.eventsList0x6c4bc4 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("LastScore").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("BestScore")) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("BestScore").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.MainCode.eventsList0x6c4bc4
gdjs.MainCode.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").setNumber(1.0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "01-Courtesy.mp3", true, 100, 1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "LevelTimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "SpawnTimer");
}{runtimeScene.getVariables().getFromIndex(0).getChild("levelLength").setNumber(10);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed").setNumber(500);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
gdjs.MainCode.condition2IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.MainCode.condition0IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.MainCode.condition1IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if( gdjs.MainCode.condition2IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.MainCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCharacterObjects1[i].addForce(1000, 0, 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
gdjs.MainCode.condition2IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.MainCode.condition0IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.MainCode.condition1IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
gdjs.MainCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.MainCode.condition2IsTrue_1.val ) {
    gdjs.MainCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.MainCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCharacterObjects1[i].addForce(-(800), 0, 0);
}
}}

}


{


{
gdjs.MainCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.MainCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 100) / 100));
}
}
{ //Subevents
gdjs.MainCode.eventsList0x6aaabc(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDCharacterObjects1[i].getX() <= 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDCharacterObjects1[k] = gdjs.MainCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDCharacterObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCharacterObjects1[i].setX(959);
}
}}

}


{

gdjs.MainCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDCharacterObjects1[i].getX() >= 960 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDCharacterObjects1[k] = gdjs.MainCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDCharacterObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCharacterObjects1[i].setX(1);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("levelLength")), "LevelTimer");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LevelTimer");
}
{ //Subevents
gdjs.MainCode.eventsList0x71a2dc(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime")), "SpawnTimer");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}{runtimeScene.getVariables().getFromIndex(1).getChild("pos").setNumber(gdjs.random(360));
}{runtimeScene.getVariables().getFromIndex(1).getChild("LR").setNumber(gdjs.random(1));
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsType").setNumber(0);
}
{ //Subevents
gdjs.MainCode.eventsList0x70db0c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MainCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.MainCode.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDCharacterObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects, false, runtimeScene, true);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
{ //Subevents
gdjs.MainCode.eventsList0x6c4bc4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.MainCode.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));
gdjs.MainCode.GDguideObjects1.createFrom(runtimeScene.getObjects("guide"));
{for(var i = 0, len = gdjs.MainCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDObstacleObjects1[i].getBehavior("Physics2").setLinearVelocityY(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed")));
}
}{for(var i = 0, len = gdjs.MainCode.GDguideObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDguideObjects1[i].getBehavior("Physics2").setLinearVelocityY(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed")));
}
}}

}


}; //End of gdjs.MainCode.eventsList0x5b6e18


gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDFloorObjects1.length = 0;
gdjs.MainCode.GDFloorObjects2.length = 0;
gdjs.MainCode.GDFloorObjects3.length = 0;
gdjs.MainCode.GDCharacterObjects1.length = 0;
gdjs.MainCode.GDCharacterObjects2.length = 0;
gdjs.MainCode.GDCharacterObjects3.length = 0;
gdjs.MainCode.GDStartButtonObjects1.length = 0;
gdjs.MainCode.GDStartButtonObjects2.length = 0;
gdjs.MainCode.GDStartButtonObjects3.length = 0;
gdjs.MainCode.GDObstacleObjects1.length = 0;
gdjs.MainCode.GDObstacleObjects2.length = 0;
gdjs.MainCode.GDObstacleObjects3.length = 0;
gdjs.MainCode.GDguideObjects1.length = 0;
gdjs.MainCode.GDguideObjects2.length = 0;
gdjs.MainCode.GDguideObjects3.length = 0;
gdjs.MainCode.GDTimerObjects1.length = 0;
gdjs.MainCode.GDTimerObjects2.length = 0;
gdjs.MainCode.GDTimerObjects3.length = 0;
gdjs.MainCode.GDTimerBackgroundObjects1.length = 0;
gdjs.MainCode.GDTimerBackgroundObjects2.length = 0;
gdjs.MainCode.GDTimerBackgroundObjects3.length = 0;

gdjs.MainCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
