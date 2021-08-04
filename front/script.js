$.extend( $.ui.slider.prototype.options, { 
    animate: 300
});

$("#flat-slider")
    .slider({
        max: 50,
        min: 0,
        range: true,
        values: [15, 35]
    })
    .slider("pips", {
        first: "pip",
        last: "pip"
    });

$("#flat-slider-vertical-1")
    .slider({
        max: 25,
        min: 0,
        range: "min",
        value: 25,
        orientation: "vertical"
    });

    $("#flat-slider-vertical-2")
    .slider({
        max: 25,
        min: 0,
        range: "max",
        value: 12,
        orientation: "vertical"
    });

$("#flat-slider-vertical-3")
    .slider({
        max: 25,
        min: 0,
        range: "min",
        value: 0,
        orientation: "vertical"
    });

$("#flat-slider-vertical-4")
    .slider({
        max: 25,
        min: 0,
        range: "min",
        value: 0,
        orientation: "vertical"
    });

$("#flat-slider-vertical-5")
    .slider({
        max: 25,
        min: 0,
        range: "min",
        value: 0,
        orientation: "vertical"
    });    
    $("#flat-slider-vertical-1, #flat-slider-vertical-3, #flat-slider-vertical-4, #flat-slider-vertical-5")
    .slider("pips", {
        first: "pip",
        last: "pip"
    })
    .slider("float");

/* Relier les données du slider via un bouton à l'api */

c = document.querySelectorAll('span.ui-slider-tip')

bill_length_mm=c[0]['outerText']
bill_depth_mm=c[1]['outerText']
flipper_length_mm=c[2]['outerText']
body_mass_g=c[3]['outerText']
