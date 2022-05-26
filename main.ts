input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, input.lightLevel())
})
DFRobotMaqueenPlus.PID(PID.ON)
soundExpression.yawn.play()
