"""
Created by: Noah
Created on: March 2026
This module is a Micro:bit MicroPython program that tracks distance using sonar
"""

from microbit import *

# variables
distanceToObject = 0

# setting up
display.show(Image.HAPPY)

# find distance using sonar
while True:
    if button_a.is_pressed():
        display.clear()
        distanceToObject = sonar.ping(
            DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters
        )
        display.scroll(distanceToObject + " cm")
        display.show(Image.HAPPY)
