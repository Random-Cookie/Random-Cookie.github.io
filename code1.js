gdjs.MainCode = {};
gdjs.MainCode.GDCharacterObjects1= [];
gdjs.MainCode.GDCharacterObjects2= [];
gdjs.MainCode.GDCharacterObjects3= [];
gdjs.MainCode.GDCharacterObjects4= [];
gdjs.MainCode.GDObstacleObjects1= [];
gdjs.MainCode.GDObstacleObjects2= [];
gdjs.MainCode.GDObstacleObjects3= [];
gdjs.MainCode.GDObstacleObjects4= [];
gdjs.MainCode.GDguideObjects1= [];
gdjs.MainCode.GDguideObjects2= [];
gdjs.MainCode.GDguideObjects3= [];
gdjs.MainCode.GDguideObjects4= [];
gdjs.MainCode.GDTimerObjects1= [];
gdjs.MainCode.GDTimerObjects2= [];
gdjs.MainCode.GDTimerObjects3= [];
gdjs.MainCode.GDTimerObjects4= [];
gdjs.MainCode.GDTimerBackgroundObjects1= [];
gdjs.MainCode.GDTimerBackgroundObjects2= [];
gdjs.MainCode.GDTimerBackgroundObjects3= [];
gdjs.MainCode.GDTimerBackgroundObjects4= [];
gdjs.MainCode.GDFPSCounterObjects1= [];
gdjs.MainCode.GDFPSCounterObjects2= [];
gdjs.MainCode.GDFPSCounterObjects3= [];
gdjs.MainCode.GDFPSCounterObjects4= [];
gdjs.MainCode.GDFPSObjects1= [];
gdjs.MainCode.GDFPSObjects2= [];
gdjs.MainCode.GDFPSObjects3= [];
gdjs.MainCode.GDFPSObjects4= [];
gdjs.MainCode.GDFloorSpriteObjects1= [];
gdjs.MainCode.GDFloorSpriteObjects2= [];
gdjs.MainCode.GDFloorSpriteObjects3= [];
gdjs.MainCode.GDFloorSpriteObjects4= [];
gdjs.MainCode.GDDebugTxtObjects1= [];
gdjs.MainCode.GDDebugTxtObjects2= [];
gdjs.MainCode.GDDebugTxtObjects3= [];
gdjs.MainCode.GDDebugTxtObjects4= [];

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


gdjs.MainCode.eventsList0x7231bc = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Endless.mp3", true, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").setNumber(1.0);
}{runtimeScene.getVariables().getFromIndex(0).getChild("levelLength").setNumber(10);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed").setNumber(500);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").setNumber(800);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "110;90;90");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Level1.mp3", true, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).getChild("levelLength").setNumber(10);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").setNumber(800);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed").setNumber(500);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "111;102;85");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 2;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Level2.mp3", true, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").setNumber(0.8);
}{runtimeScene.getVariables().getFromIndex(0).getChild("levelLength").setNumber(10);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").setNumber(1000);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed").setNumber(500);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "113;133;91");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 3;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Level3.mp3", true, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").setNumber(0.6);
}{runtimeScene.getVariables().getFromIndex(0).getChild("levelLength").setNumber(10);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").setNumber(1200);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed").setNumber(500);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "81;106;120");
}}

}


}; //End of gdjs.MainCode.eventsList0x7231bc
gdjs.MainCode.eventsList0x6d17b4 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


}; //End of gdjs.MainCode.eventsList0x6d17b4
gdjs.MainCode.eventsList0x6d1b24 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("guides")) > 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("guides").setNumber(0);
}}

}


}; //End of gdjs.MainCode.eventsList0x6d1b24
gdjs.MainCode.eventsList0x748234 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) > 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}}

}


}; //End of gdjs.MainCode.eventsList0x748234
gdjs.MainCode.eventsList0x6becfc = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) > 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}}

}


}; //End of gdjs.MainCode.eventsList0x6becfc
gdjs.MainCode.eventsList0x71958c = function(runtimeScene) {

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


}; //End of gdjs.MainCode.eventsList0x71958c
gdjs.MainCode.eventsList0x6bea2c = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("level")) < 10;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").mul(0.95);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").mul(1.02);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("level")) >= 10;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").mul(0.99);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").mul(1.01);
}}

}


}; //End of gdjs.MainCode.eventsList0x6bea2c
gdjs.MainCode.eventsList0x6be6cc = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList0x6bea2c(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").mul(0.95);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").mul(1.02);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 2;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").mul(0.95);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").mul(1.02);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 3;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime").mul(0.95);
}{runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce").mul(1.02);
}}

}


}; //End of gdjs.MainCode.eventsList0x6be6cc
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDguideObjects1Objects = Hashtable.newFrom({"guide": gdjs.MainCode.GDguideObjects1});gdjs.MainCode.eventsList0x72da14 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("guides")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDguideObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDguideObjects1Objects, 400 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(132), "");
}}

}


}; //End of gdjs.MainCode.eventsList0x72da14
gdjs.MainCode.eventsList0x72d674 = function(runtimeScene) {

{


{
gdjs.MainCode.GDObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects, -(560) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(32), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects, 560 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1).getChild("pos")), -(32), "");
}{for(var i = 0, len = gdjs.MainCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDObstacleObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")));
}
}
{ //Subevents
gdjs.MainCode.eventsList0x72da14(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainCode.eventsList0x72d674
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.MainCode.GDCharacterObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.MainCode.GDObstacleObjects1});gdjs.MainCode.eventsList0x6c50f4 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("EndlessBest"));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("EndlessBest").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.MainCode.eventsList0x6c50f4
gdjs.MainCode.eventsList0x6c56ac = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L1Best"));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L1Best").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.MainCode.eventsList0x6c56ac
gdjs.MainCode.eventsList0x7a60ac = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L2Best"));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L2Best").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.MainCode.eventsList0x7a60ac
gdjs.MainCode.eventsList0x7a665c = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L3Best"));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L3Best").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.MainCode.eventsList0x7a665c
gdjs.MainCode.eventsList0x6c4e04 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("EndlessLast").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.MainCode.eventsList0x6c50f4(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L1Last").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.MainCode.eventsList0x6c56ac(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 2;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L2Last").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.MainCode.eventsList0x7a60ac(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) == 3;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L3Last").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.MainCode.eventsList0x7a665c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainCode.eventsList0x6c4e04
gdjs.MainCode.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.MainCode.GDFloorSpriteObjects1.createFrom(runtimeScene.getObjects("FloorSprite"));
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "LevelTimer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "SpawnTimer");
}{for(var i = 0, len = gdjs.MainCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCharacterObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")));
}
}{for(var i = 0, len = gdjs.MainCode.GDFloorSpriteObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFloorSpriteObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")));
}
}
{ //Subevents
gdjs.MainCode.eventsList0x7231bc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).add(1);
}
{ //Subevents
gdjs.MainCode.eventsList0x6d17b4(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("guides").add(1);
}
{ //Subevents
gdjs.MainCode.eventsList0x6d1b24(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num3");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).add(1);
}
{ //Subevents
gdjs.MainCode.eventsList0x748234(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDFPSObjects1.createFrom(runtimeScene.getObjects("FPS"));
gdjs.MainCode.GDFPSCounterObjects1.createFrom(runtimeScene.getObjects("FPSCounter"));
{for(var i = 0, len = gdjs.MainCode.GDFPSCounterObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFPSCounterObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.MainCode.GDFPSObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFPSObjects1[i].setString("");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDFPSObjects1.createFrom(runtimeScene.getObjects("FPS"));
gdjs.MainCode.GDFPSCounterObjects1.createFrom(runtimeScene.getObjects("FPSCounter"));
{for(var i = 0, len = gdjs.MainCode.GDFPSCounterObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFPSCounterObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}{for(var i = 0, len = gdjs.MainCode.GDFPSObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFPSObjects1[i].setString("FPS:");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num5");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).add(1);
}
{ //Subevents
gdjs.MainCode.eventsList0x6becfc(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDDebugTxtObjects1.createFrom(runtimeScene.getObjects("DebugTxt"));
{for(var i = 0, len = gdjs.MainCode.GDDebugTxtObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDebugTxtObjects1[i].setString("");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDDebugTxtObjects1.createFrom(runtimeScene.getObjects("DebugTxt"));
{for(var i = 0, len = gdjs.MainCode.GDDebugTxtObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDebugTxtObjects1[i].setString("Mode: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode")) + "\nLevel: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("level")) + "\nObsSpeed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed")) + "\nObsSpawnTime: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime")) + "\nCharacterForce: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce")) + "\nGuides: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("guides")) + "\nInvunrable: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}}

}


{



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
    gdjs.MainCode.GDCharacterObjects1[i].addForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce")), 0, 0);
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
    gdjs.MainCode.GDCharacterObjects1[i].addForce(-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("CharacterForce"))), 0, 0);
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
gdjs.MainCode.eventsList0x71958c(runtimeScene);} //End of subevents
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
}{runtimeScene.getVariables().getFromIndex(0).getChild("level").add(1);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsSpeed").add(10);
}
{ //Subevents
gdjs.MainCode.eventsList0x6be6cc(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("spawnTime")), "SpawnTimer");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}{runtimeScene.getVariables().getFromIndex(1).getChild("pos").setNumber(gdjs.random(720) - 360);
}{runtimeScene.getVariables().getFromIndex(1).getChild("obsType").setNumber(0);
}
{ //Subevents
gdjs.MainCode.eventsList0x72d674(runtimeScene);} //End of subevents
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


{



}


{

gdjs.MainCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.MainCode.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.condition0IsTrue_1.val = false;
gdjs.MainCode.condition1IsTrue_1.val = false;
{
gdjs.MainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDCharacterObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDObstacleObjects1Objects, false, runtimeScene, true);
}if ( gdjs.MainCode.condition0IsTrue_1.val ) {
{
gdjs.MainCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}}
gdjs.MainCode.conditionTrue_1.val = true && gdjs.MainCode.condition0IsTrue_1.val && gdjs.MainCode.condition1IsTrue_1.val;
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
{ //Subevents
gdjs.MainCode.eventsList0x6c4e04(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainCode.eventsList0x5b6e18


gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDCharacterObjects1.length = 0;
gdjs.MainCode.GDCharacterObjects2.length = 0;
gdjs.MainCode.GDCharacterObjects3.length = 0;
gdjs.MainCode.GDCharacterObjects4.length = 0;
gdjs.MainCode.GDObstacleObjects1.length = 0;
gdjs.MainCode.GDObstacleObjects2.length = 0;
gdjs.MainCode.GDObstacleObjects3.length = 0;
gdjs.MainCode.GDObstacleObjects4.length = 0;
gdjs.MainCode.GDguideObjects1.length = 0;
gdjs.MainCode.GDguideObjects2.length = 0;
gdjs.MainCode.GDguideObjects3.length = 0;
gdjs.MainCode.GDguideObjects4.length = 0;
gdjs.MainCode.GDTimerObjects1.length = 0;
gdjs.MainCode.GDTimerObjects2.length = 0;
gdjs.MainCode.GDTimerObjects3.length = 0;
gdjs.MainCode.GDTimerObjects4.length = 0;
gdjs.MainCode.GDTimerBackgroundObjects1.length = 0;
gdjs.MainCode.GDTimerBackgroundObjects2.length = 0;
gdjs.MainCode.GDTimerBackgroundObjects3.length = 0;
gdjs.MainCode.GDTimerBackgroundObjects4.length = 0;
gdjs.MainCode.GDFPSCounterObjects1.length = 0;
gdjs.MainCode.GDFPSCounterObjects2.length = 0;
gdjs.MainCode.GDFPSCounterObjects3.length = 0;
gdjs.MainCode.GDFPSCounterObjects4.length = 0;
gdjs.MainCode.GDFPSObjects1.length = 0;
gdjs.MainCode.GDFPSObjects2.length = 0;
gdjs.MainCode.GDFPSObjects3.length = 0;
gdjs.MainCode.GDFPSObjects4.length = 0;
gdjs.MainCode.GDFloorSpriteObjects1.length = 0;
gdjs.MainCode.GDFloorSpriteObjects2.length = 0;
gdjs.MainCode.GDFloorSpriteObjects3.length = 0;
gdjs.MainCode.GDFloorSpriteObjects4.length = 0;
gdjs.MainCode.GDDebugTxtObjects1.length = 0;
gdjs.MainCode.GDDebugTxtObjects2.length = 0;
gdjs.MainCode.GDDebugTxtObjects3.length = 0;
gdjs.MainCode.GDDebugTxtObjects4.length = 0;

gdjs.MainCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
