DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.ON)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
huskylens.writeName(1, "Green")
huskylens.writeName(2, "Red")
huskylens.writeName(3, "Purple")
basic.forever(function () {
	
})
