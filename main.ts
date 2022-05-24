input.onButtonPressed(Button.A, function () {
    let broadcast_emoji = 0
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 5)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    basic.pause(5000)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 5)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    radio.sendString("" + (broadcast_emoji))
})
