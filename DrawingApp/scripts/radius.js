var setRadius = function (newRadius) {
    if (newRadius < minRad)
        newRadius = minRad;
    else if (newRadius > maxRad)
        newRadius = maxRad;
    radius = newRadius;
    context.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}

var minRad = 0.5,
    maxRad = 100,
    defaultRad = 20,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');

var setRadFunc1 = function () {
    setRadius(radius - interval);
}

if (setRadius(0.5)) {
    var setRadFunc2 = function () {
        setRadius(radius + interval + 0.5);
    }

}

else {
    var setRadFunc2 = function () {
        setRadius(radius + interval);
    }
}



decRad.addEventListener('click', setRadFunc1);
incRad.addEventListener('click', setRadFunc2);

setRadius(defaultRad);