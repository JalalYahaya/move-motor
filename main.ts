input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    led.plot(randint(0, 4), randint(0, 4))
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 10)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 10)
    Kitronik_Move_Motor.stop()
})
