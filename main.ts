basic.showString("BloodLens")
basic.forever(function on_forever() {
    if (PlanetX_Basic.waterLevel(PlanetX_Basic.AnalogRJPin.J1) < 30) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.LoopingInBackground)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
    }
    
})
