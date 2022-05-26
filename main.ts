/**
 * Riley work
 * 
 * (idk what im doing i cant do much until we have the maze
 */
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, input.lightLevel())
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, input.lightLevel())
})
DFRobotMaqueenPlus.PID(PID.ON)
soundExpression.yawn.play()
