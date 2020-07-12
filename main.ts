input.onGesture(Gesture.Shake, function () {
    counter_mode = 0
    basic.clearScreen()
})
let current_time = 0
let start_time = 0
let counter_mode = 0
counter_mode = 0
basic.forever(function () {
    if (counter_mode == 0) {
        if (20 <= input.temperature()) {
            counter_mode = 1
            start_time = input.runningTime()
        }
    } else {
        current_time = input.runningTime()
        if (current_time - start_time >= 180000) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        } else {
            led.plotBarGraph(
            current_time - start_time,
            180000
            )
        }
    }
})
