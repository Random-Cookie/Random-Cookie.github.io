gdjs.MenuCode = {};
gdjs.MenuCode.GDStartButtonObjects1_1final = [];

gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDStartTextObjects1= [];
gdjs.MenuCode.GDStartTextObjects2= [];
gdjs.MenuCode.GDPreviousScoreObjects1= [];
gdjs.MenuCode.GDPreviousScoreObjects2= [];
gdjs.MenuCode.GDBestScoreObjects1= [];
gdjs.MenuCode.GDBestScoreObjects2= [];
gdjs.MenuCode.GDLastObjects1= [];
gdjs.MenuCode.GDLastObjects2= [];
gdjs.MenuCode.GDBestObjects1= [];
gdjs.MenuCode.GDBestObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.conditionTrue_2 = {val:false};
gdjs.MenuCode.condition0IsTrue_2 = {val:false};
gdjs.MenuCode.condition1IsTrue_2 = {val:false};
gdjs.MenuCode.condition2IsTrue_2 = {val:false};


gdjs.MenuCode.eventsList0x723524 = function(runtimeScene) {

{


{
gdjs.MenuCode.GDBestScoreObjects1.createFrom(runtimeScene.getObjects("BestScore"));
{for(var i = 0, len = gdjs.MenuCode.GDBestScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBestScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("BestScore")) * 100) / 100));
}
}}

}


}; //End of gdjs.MenuCode.eventsList0x723524
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.MenuCode.GDStartButtonObjects2});gdjs.MenuCode.eventsList0x723874 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x723874
gdjs.MenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDPreviousScoreObjects1.createFrom(runtimeScene.getObjects("PreviousScore"));
{for(var i = 0, len = gdjs.MenuCode.GDPreviousScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPreviousScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("LastScore")) * 100) / 100));
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x723524(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDStartButtonObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.GDStartButtonObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.GDStartButtonObjects2.createFrom(runtimeScene.getObjects("StartButton"));
{gdjs.MenuCode.conditionTrue_2 = gdjs.MenuCode.condition0IsTrue_1;
gdjs.MenuCode.condition0IsTrue_2.val = false;
gdjs.MenuCode.condition1IsTrue_2.val = false;
{
gdjs.MenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_2.val ) {
{
gdjs.MenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}}
gdjs.MenuCode.conditionTrue_2.val = true && gdjs.MenuCode.condition0IsTrue_2.val && gdjs.MenuCode.condition1IsTrue_2.val;
}
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDStartButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDStartButtonObjects1_1final.indexOf(gdjs.MenuCode.GDStartButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDStartButtonObjects1_1final.push(gdjs.MenuCode.GDStartButtonObjects2[j]);
    }
}
}
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.MenuCode.condition1IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.MenuCode.GDStartButtonObjects1.createFrom(gdjs.MenuCode.GDStartButtonObjects1_1final);
}
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("mode").setString("Endless");
}
{ //Subevents
gdjs.MenuCode.eventsList0x723874(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0x5b6e18


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDStartTextObjects1.length = 0;
gdjs.MenuCode.GDStartTextObjects2.length = 0;
gdjs.MenuCode.GDPreviousScoreObjects1.length = 0;
gdjs.MenuCode.GDPreviousScoreObjects2.length = 0;
gdjs.MenuCode.GDBestScoreObjects1.length = 0;
gdjs.MenuCode.GDBestScoreObjects2.length = 0;
gdjs.MenuCode.GDLastObjects1.length = 0;
gdjs.MenuCode.GDLastObjects2.length = 0;
gdjs.MenuCode.GDBestObjects1.length = 0;
gdjs.MenuCode.GDBestObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
