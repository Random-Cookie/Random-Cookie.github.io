gdjs.MenuCode = {};
gdjs.MenuCode.GDL1BestScoreObjects1_1final = [];

gdjs.MenuCode.GDL2BestScoreObjects1_1final = [];

gdjs.MenuCode.GDL3BestScoreObjects1_1final = [];

gdjs.MenuCode.GDLastObjects1= [];
gdjs.MenuCode.GDLastObjects2= [];
gdjs.MenuCode.GDBestObjects1= [];
gdjs.MenuCode.GDBestObjects2= [];
gdjs.MenuCode.GDLevel1Objects1= [];
gdjs.MenuCode.GDLevel1Objects2= [];
gdjs.MenuCode.GDLevel1TxtObjects1= [];
gdjs.MenuCode.GDLevel1TxtObjects2= [];
gdjs.MenuCode.GDL1BestScoreObjects1= [];
gdjs.MenuCode.GDL1BestScoreObjects2= [];
gdjs.MenuCode.GDL1LastScoreObjects1= [];
gdjs.MenuCode.GDL1LastScoreObjects2= [];
gdjs.MenuCode.GDLevel2Objects1= [];
gdjs.MenuCode.GDLevel2Objects2= [];
gdjs.MenuCode.GDLevel2TxtObjects1= [];
gdjs.MenuCode.GDLevel2TxtObjects2= [];
gdjs.MenuCode.GDL2BestScoreObjects1= [];
gdjs.MenuCode.GDL2BestScoreObjects2= [];
gdjs.MenuCode.GDL2LastScoreObjects1= [];
gdjs.MenuCode.GDL2LastScoreObjects2= [];
gdjs.MenuCode.GDLevel3Objects1= [];
gdjs.MenuCode.GDLevel3Objects2= [];
gdjs.MenuCode.GDLevel3TxtObjects1= [];
gdjs.MenuCode.GDLevel3TxtObjects2= [];
gdjs.MenuCode.GDL3BestScoreObjects1= [];
gdjs.MenuCode.GDL3BestScoreObjects2= [];
gdjs.MenuCode.GDL3LastScoreObjects1= [];
gdjs.MenuCode.GDL3LastScoreObjects2= [];
gdjs.MenuCode.GDEndlessObjects1= [];
gdjs.MenuCode.GDEndlessObjects2= [];
gdjs.MenuCode.GDEndlessTxtObjects1= [];
gdjs.MenuCode.GDEndlessTxtObjects2= [];
gdjs.MenuCode.GDEndlessBestScoreObjects1= [];
gdjs.MenuCode.GDEndlessBestScoreObjects2= [];
gdjs.MenuCode.GDEndlessLastScoreObjects1= [];
gdjs.MenuCode.GDEndlessLastScoreObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDControlsObjects1= [];
gdjs.MenuCode.GDControlsObjects2= [];
gdjs.MenuCode.GDCheatsTxtObjects1= [];
gdjs.MenuCode.GDCheatsTxtObjects2= [];
gdjs.MenuCode.GDCheatButtonObjects1= [];
gdjs.MenuCode.GDCheatButtonObjects2= [];
gdjs.MenuCode.GDCheatsDisplayObjects1= [];
gdjs.MenuCode.GDCheatsDisplayObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.MenuCode.GDLevel1Objects1});gdjs.MenuCode.eventsList0x7adb14 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x7adb14
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects1Objects = Hashtable.newFrom({"Level2": gdjs.MenuCode.GDLevel2Objects1});gdjs.MenuCode.eventsList0x7adddc = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x7adddc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel3Objects1Objects = Hashtable.newFrom({"Level3": gdjs.MenuCode.GDLevel3Objects1});gdjs.MenuCode.eventsList0x7aba8c = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x7aba8c
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEndlessObjects1Objects = Hashtable.newFrom({"Endless": gdjs.MenuCode.GDEndlessObjects1});gdjs.MenuCode.eventsList0x6b7954 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x6b7954
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatButtonObjects1Objects = Hashtable.newFrom({"CheatButton": gdjs.MenuCode.GDCheatButtonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatButtonObjects1Objects = Hashtable.newFrom({"CheatButton": gdjs.MenuCode.GDCheatButtonObjects1});gdjs.MenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDEndlessBestScoreObjects1.createFrom(runtimeScene.getObjects("EndlessBestScore"));
gdjs.MenuCode.GDEndlessLastScoreObjects1.createFrom(runtimeScene.getObjects("EndlessLastScore"));
gdjs.MenuCode.GDL1BestScoreObjects1.createFrom(runtimeScene.getObjects("L1BestScore"));
gdjs.MenuCode.GDL1LastScoreObjects1.createFrom(runtimeScene.getObjects("L1LastScore"));
gdjs.MenuCode.GDL2BestScoreObjects1.createFrom(runtimeScene.getObjects("L2BestScore"));
gdjs.MenuCode.GDL2LastScoreObjects1.createFrom(runtimeScene.getObjects("L2LastScore"));
gdjs.MenuCode.GDL3BestScoreObjects1.createFrom(runtimeScene.getObjects("L3BestScore"));
gdjs.MenuCode.GDL3LastScoreObjects1.createFrom(runtimeScene.getObjects("L3LastScore"));
{for(var i = 0, len = gdjs.MenuCode.GDL1LastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL1LastScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L1Last")) * 100) / 100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDL1BestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL1BestScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L1Best")) * 100) / 100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDL2LastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL2LastScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L2Last")) * 100) / 100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDL2BestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL2BestScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L2Best")) * 100) / 100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDL3LastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL3LastScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L3Last")) * 100) / 100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDL3BestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL3BestScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("L3Best")) * 100) / 100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDEndlessLastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessLastScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("EndlessLast")) * 100) / 100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDEndlessBestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessBestScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("EndlessBest")) * 100) / 100));
}
}}

}


{

gdjs.MenuCode.GDLevel1Objects1.createFrom(runtimeScene.getObjects("Level1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects, runtimeScene, true, false);
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode").setNumber(1);
}
{ //Subevents
gdjs.MenuCode.eventsList0x7adb14(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDLevel2Objects1.createFrom(runtimeScene.getObjects("Level2"));
gdjs.MenuCode.GDL1BestScoreObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.GDL1BestScoreObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.GDL1BestScoreObjects2.createFrom(runtimeScene.getObjects("L1BestScore"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL1BestScoreObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL1BestScoreObjects2[i].getString() >= "60.00" ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDL1BestScoreObjects2[k] = gdjs.MenuCode.GDL1BestScoreObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDL1BestScoreObjects2.length = k;if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDL1BestScoreObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDL1BestScoreObjects1_1final.indexOf(gdjs.MenuCode.GDL1BestScoreObjects2[j]) === -1 )
            gdjs.MenuCode.GDL1BestScoreObjects1_1final.push(gdjs.MenuCode.GDL1BestScoreObjects2[j]);
    }
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.GDL1BestScoreObjects1.createFrom(gdjs.MenuCode.GDL1BestScoreObjects1_1final);
}
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode").setNumber(2);
}
{ //Subevents
gdjs.MenuCode.eventsList0x7adddc(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDL1BestScoreObjects1.createFrom(runtimeScene.getObjects("L1BestScore"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL1BestScoreObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL1BestScoreObjects1[i].getString() <= "60.00" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDL1BestScoreObjects1[k] = gdjs.MenuCode.GDL1BestScoreObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDL1BestScoreObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDL2BestScoreObjects1.createFrom(runtimeScene.getObjects("L2BestScore"));
gdjs.MenuCode.GDL2LastScoreObjects1.createFrom(runtimeScene.getObjects("L2LastScore"));
gdjs.MenuCode.GDLevel2TxtObjects1.createFrom(runtimeScene.getObjects("Level2Txt"));
{for(var i = 0, len = gdjs.MenuCode.GDLevel2TxtObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel2TxtObjects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL2BestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL2BestScoreObjects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL2LastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL2LastScoreObjects1[i].setOpacity(127);
}
}}

}


{

gdjs.MenuCode.GDL1BestScoreObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDL1BestScoreObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.GDL1BestScoreObjects2.createFrom(runtimeScene.getObjects("L1BestScore"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL1BestScoreObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL1BestScoreObjects2[i].getString() >= "60.00" ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDL1BestScoreObjects2[k] = gdjs.MenuCode.GDL1BestScoreObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDL1BestScoreObjects2.length = k;if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDL1BestScoreObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDL1BestScoreObjects1_1final.indexOf(gdjs.MenuCode.GDL1BestScoreObjects2[j]) === -1 )
            gdjs.MenuCode.GDL1BestScoreObjects1_1final.push(gdjs.MenuCode.GDL1BestScoreObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDL1BestScoreObjects1.createFrom(gdjs.MenuCode.GDL1BestScoreObjects1_1final);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDL2BestScoreObjects1.createFrom(runtimeScene.getObjects("L2BestScore"));
gdjs.MenuCode.GDL2LastScoreObjects1.createFrom(runtimeScene.getObjects("L2LastScore"));
gdjs.MenuCode.GDLevel2TxtObjects1.createFrom(runtimeScene.getObjects("Level2Txt"));
{for(var i = 0, len = gdjs.MenuCode.GDLevel2TxtObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel2TxtObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL2LastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL2LastScoreObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL2BestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL2BestScoreObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.MenuCode.GDLevel3Objects1.createFrom(runtimeScene.getObjects("Level3"));
gdjs.MenuCode.GDL2BestScoreObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.GDL2BestScoreObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.GDL2BestScoreObjects2.createFrom(runtimeScene.getObjects("L2BestScore"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL2BestScoreObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL2BestScoreObjects2[i].getString() >= "60.00" ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDL2BestScoreObjects2[k] = gdjs.MenuCode.GDL2BestScoreObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDL2BestScoreObjects2.length = k;if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDL2BestScoreObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDL2BestScoreObjects1_1final.indexOf(gdjs.MenuCode.GDL2BestScoreObjects2[j]) === -1 )
            gdjs.MenuCode.GDL2BestScoreObjects1_1final.push(gdjs.MenuCode.GDL2BestScoreObjects2[j]);
    }
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.GDL2BestScoreObjects1.createFrom(gdjs.MenuCode.GDL2BestScoreObjects1_1final);
}
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode").setNumber(3);
}
{ //Subevents
gdjs.MenuCode.eventsList0x7aba8c(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDL2BestScoreObjects1.createFrom(runtimeScene.getObjects("L2BestScore"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL2BestScoreObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL2BestScoreObjects1[i].getString() <= "60.00" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDL2BestScoreObjects1[k] = gdjs.MenuCode.GDL2BestScoreObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDL2BestScoreObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDL3BestScoreObjects1.createFrom(runtimeScene.getObjects("L3BestScore"));
gdjs.MenuCode.GDL3LastScoreObjects1.createFrom(runtimeScene.getObjects("L3LastScore"));
gdjs.MenuCode.GDLevel3TxtObjects1.createFrom(runtimeScene.getObjects("Level3Txt"));
{for(var i = 0, len = gdjs.MenuCode.GDLevel3TxtObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel3TxtObjects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL3LastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL3LastScoreObjects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL3BestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL3BestScoreObjects1[i].setOpacity(127);
}
}}

}


{

gdjs.MenuCode.GDL2BestScoreObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDL2BestScoreObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.GDL2BestScoreObjects2.createFrom(runtimeScene.getObjects("L2BestScore"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL2BestScoreObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL2BestScoreObjects2[i].getString() >= "60.00" ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDL2BestScoreObjects2[k] = gdjs.MenuCode.GDL2BestScoreObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDL2BestScoreObjects2.length = k;if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDL2BestScoreObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDL2BestScoreObjects1_1final.indexOf(gdjs.MenuCode.GDL2BestScoreObjects2[j]) === -1 )
            gdjs.MenuCode.GDL2BestScoreObjects1_1final.push(gdjs.MenuCode.GDL2BestScoreObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDL2BestScoreObjects1.createFrom(gdjs.MenuCode.GDL2BestScoreObjects1_1final);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDL3BestScoreObjects1.createFrom(runtimeScene.getObjects("L3BestScore"));
gdjs.MenuCode.GDL3LastScoreObjects1.createFrom(runtimeScene.getObjects("L3LastScore"));
gdjs.MenuCode.GDLevel3TxtObjects1.createFrom(runtimeScene.getObjects("Level3Txt"));
{for(var i = 0, len = gdjs.MenuCode.GDLevel3TxtObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel3TxtObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL3LastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL3LastScoreObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDL3BestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDL3BestScoreObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.MenuCode.GDEndlessObjects1.createFrom(runtimeScene.getObjects("Endless"));
gdjs.MenuCode.GDL3BestScoreObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEndlessObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.GDL3BestScoreObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.GDL3BestScoreObjects2.createFrom(runtimeScene.getObjects("L3BestScore"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL3BestScoreObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL3BestScoreObjects2[i].getString() >= "60.00" ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDL3BestScoreObjects2[k] = gdjs.MenuCode.GDL3BestScoreObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDL3BestScoreObjects2.length = k;if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDL3BestScoreObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDL3BestScoreObjects1_1final.indexOf(gdjs.MenuCode.GDL3BestScoreObjects2[j]) === -1 )
            gdjs.MenuCode.GDL3BestScoreObjects1_1final.push(gdjs.MenuCode.GDL3BestScoreObjects2[j]);
    }
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.GDL3BestScoreObjects1.createFrom(gdjs.MenuCode.GDL3BestScoreObjects1_1final);
}
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode").setNumber(0);
}
{ //Subevents
gdjs.MenuCode.eventsList0x6b7954(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDL3BestScoreObjects1.createFrom(runtimeScene.getObjects("L3BestScore"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL3BestScoreObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL3BestScoreObjects1[i].getString() < "60.00" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDL3BestScoreObjects1[k] = gdjs.MenuCode.GDL3BestScoreObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDL3BestScoreObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDEndlessBestScoreObjects1.createFrom(runtimeScene.getObjects("EndlessBestScore"));
gdjs.MenuCode.GDEndlessLastScoreObjects1.createFrom(runtimeScene.getObjects("EndlessLastScore"));
gdjs.MenuCode.GDEndlessTxtObjects1.createFrom(runtimeScene.getObjects("EndlessTxt"));
{for(var i = 0, len = gdjs.MenuCode.GDEndlessTxtObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessTxtObjects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.MenuCode.GDEndlessLastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessLastScoreObjects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.MenuCode.GDEndlessBestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessBestScoreObjects1[i].setOpacity(127);
}
}}

}


{

gdjs.MenuCode.GDL3BestScoreObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDL3BestScoreObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.GDL3BestScoreObjects2.createFrom(runtimeScene.getObjects("L3BestScore"));
for(var i = 0, k = 0, l = gdjs.MenuCode.GDL3BestScoreObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDL3BestScoreObjects2[i].getString() >= "60.00" ) {
        gdjs.MenuCode.condition1IsTrue_1.val = true;
        gdjs.MenuCode.GDL3BestScoreObjects2[k] = gdjs.MenuCode.GDL3BestScoreObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDL3BestScoreObjects2.length = k;if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDL3BestScoreObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDL3BestScoreObjects1_1final.indexOf(gdjs.MenuCode.GDL3BestScoreObjects2[j]) === -1 )
            gdjs.MenuCode.GDL3BestScoreObjects1_1final.push(gdjs.MenuCode.GDL3BestScoreObjects2[j]);
    }
}
}
{
gdjs.MenuCode.GDL3BestScoreObjects1.createFrom(gdjs.MenuCode.GDL3BestScoreObjects1_1final);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDEndlessBestScoreObjects1.createFrom(runtimeScene.getObjects("EndlessBestScore"));
gdjs.MenuCode.GDEndlessLastScoreObjects1.createFrom(runtimeScene.getObjects("EndlessLastScore"));
gdjs.MenuCode.GDEndlessTxtObjects1.createFrom(runtimeScene.getObjects("EndlessTxt"));
{for(var i = 0, len = gdjs.MenuCode.GDEndlessTxtObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessTxtObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDEndlessLastScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessLastScoreObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDEndlessBestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEndlessBestScoreObjects1[i].setOpacity(255);
}
}}

}


{



}


{

gdjs.MenuCode.GDCheatButtonObjects1.createFrom(runtimeScene.getObjects("CheatButton"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDCheatsDisplayObjects1.createFrom(runtimeScene.getObjects("CheatsDisplay"));
{for(var i = 0, len = gdjs.MenuCode.GDCheatsDisplayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCheatsDisplayObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.MenuCode.GDCheatButtonObjects1.createFrom(runtimeScene.getObjects("CheatButton"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDCheatsDisplayObjects1.createFrom(runtimeScene.getObjects("CheatsDisplay"));
{for(var i = 0, len = gdjs.MenuCode.GDCheatsDisplayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCheatsDisplayObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num4");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.MenuCode.eventsList0x5b6e18


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDLastObjects1.length = 0;
gdjs.MenuCode.GDLastObjects2.length = 0;
gdjs.MenuCode.GDBestObjects1.length = 0;
gdjs.MenuCode.GDBestObjects2.length = 0;
gdjs.MenuCode.GDLevel1Objects1.length = 0;
gdjs.MenuCode.GDLevel1Objects2.length = 0;
gdjs.MenuCode.GDLevel1TxtObjects1.length = 0;
gdjs.MenuCode.GDLevel1TxtObjects2.length = 0;
gdjs.MenuCode.GDL1BestScoreObjects1.length = 0;
gdjs.MenuCode.GDL1BestScoreObjects2.length = 0;
gdjs.MenuCode.GDL1LastScoreObjects1.length = 0;
gdjs.MenuCode.GDL1LastScoreObjects2.length = 0;
gdjs.MenuCode.GDLevel2Objects1.length = 0;
gdjs.MenuCode.GDLevel2Objects2.length = 0;
gdjs.MenuCode.GDLevel2TxtObjects1.length = 0;
gdjs.MenuCode.GDLevel2TxtObjects2.length = 0;
gdjs.MenuCode.GDL2BestScoreObjects1.length = 0;
gdjs.MenuCode.GDL2BestScoreObjects2.length = 0;
gdjs.MenuCode.GDL2LastScoreObjects1.length = 0;
gdjs.MenuCode.GDL2LastScoreObjects2.length = 0;
gdjs.MenuCode.GDLevel3Objects1.length = 0;
gdjs.MenuCode.GDLevel3Objects2.length = 0;
gdjs.MenuCode.GDLevel3TxtObjects1.length = 0;
gdjs.MenuCode.GDLevel3TxtObjects2.length = 0;
gdjs.MenuCode.GDL3BestScoreObjects1.length = 0;
gdjs.MenuCode.GDL3BestScoreObjects2.length = 0;
gdjs.MenuCode.GDL3LastScoreObjects1.length = 0;
gdjs.MenuCode.GDL3LastScoreObjects2.length = 0;
gdjs.MenuCode.GDEndlessObjects1.length = 0;
gdjs.MenuCode.GDEndlessObjects2.length = 0;
gdjs.MenuCode.GDEndlessTxtObjects1.length = 0;
gdjs.MenuCode.GDEndlessTxtObjects2.length = 0;
gdjs.MenuCode.GDEndlessBestScoreObjects1.length = 0;
gdjs.MenuCode.GDEndlessBestScoreObjects2.length = 0;
gdjs.MenuCode.GDEndlessLastScoreObjects1.length = 0;
gdjs.MenuCode.GDEndlessLastScoreObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDControlsObjects1.length = 0;
gdjs.MenuCode.GDControlsObjects2.length = 0;
gdjs.MenuCode.GDCheatsTxtObjects1.length = 0;
gdjs.MenuCode.GDCheatsTxtObjects2.length = 0;
gdjs.MenuCode.GDCheatButtonObjects1.length = 0;
gdjs.MenuCode.GDCheatButtonObjects2.length = 0;
gdjs.MenuCode.GDCheatsDisplayObjects1.length = 0;
gdjs.MenuCode.GDCheatsDisplayObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
