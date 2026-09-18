input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
basic.showString("BloodLens")
basic.forever(function () {
    if (PlanetX_Basic.waterLevel(PlanetX_Basic.AnalogRJPin.J1) < 30) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    }
})
