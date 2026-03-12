/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah
 * Created on: March 2026
 * This program finds distance between objects using sonar
*/

// variables
let distanceToObject: number = 0

// setting up
basic.showIcon(IconNames.Happy)

// find distance using sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showString(distanceToObject + ' cm')
    basic.showIcon(IconNames.Happy)
})
