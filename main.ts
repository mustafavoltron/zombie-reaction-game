basic.forever(function () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(10)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
        basic.pause(1000)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
        basic.pause(1000)
    }
})
