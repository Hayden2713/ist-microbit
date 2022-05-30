input.onButtonPressed(Button.A, function () {
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    huskylens.writeName(1, "Hayden")
    huskylens.writeOSD("Face_Recog", 273, 10)
    if (false || false) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorStop(maqueen.Motors.M1)
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                maqueen.motorStop(maqueen.Motors.M1)
            }
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                maqueen.motorStop(maqueen.Motors.M2)
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                    maqueen.motorStop(maqueen.Motors.M2)
                }
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                } else {
                    maqueen.motorStop(maqueen.Motors.M2)
                }
            }
        }
    }
})
input.calibrateCompass()
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
huskylens.writeName(1, "Hayden")
DFRobotMaqueenPlus.PID(PID.ON)
basic.forever(function () {
	
})
