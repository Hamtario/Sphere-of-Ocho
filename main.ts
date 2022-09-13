input.onGesture(Gesture.Shake, function () {
    Random_number = randint(0, 2)
    if (Random_number == 0) {
        basic.showString("Answer Unclear")
    } else if (Random_number == 1) {
        basic.showString("No")
    } else {
        basic.showString("Yes")
    }
})
let Random_number = 0
basic.showString("Sphere of Ocho")
