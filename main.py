basic.show_string("BloodLens")

def on_forever():
    if PlanetX_Basic.water_level(PlanetX_Basic.AnalogRJPin.J1) < 30:
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J1, True)
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J2, False)
        music.play(music.builtin_playable_sound_effect(soundExpression.hello),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    else:
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J1, False)
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J2, True)
basic.forever(on_forever)
