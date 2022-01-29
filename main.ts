basic.forever(function () {
    stembot.setup()
    stembot.setPinMode(SBMode.Input)
    basic.showString("" + (stembot.readLine(SBIRSensor.Right)))
    basic.showString("" + (stembot.lightSensor(SBLdr.Right)))
    basic.showString("" + (stembot.ping(SBPingUnit.Inches)))
    stembot.moveIt(SBMove.Forward)
    basic.showString("" + (stembot.digitalRead(SBPin.Sv6)))
    stembot.digitalWrite(SBPin.Sv5, false)
})
