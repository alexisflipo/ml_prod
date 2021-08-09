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
        max: 80,
        min: 30,
        range: "min",
        value: 25,
        orientation: "vertical"
    });

    $("#flat-slider-vertical-2")
    .slider({
        max: 30,
        min: 13,
        range: "max",
        value: 12,
        orientation: "vertical"
    });

$("#flat-slider-vertical-3")
    .slider({
        max: 30,
        min: 13,
        range: "min",
        value: 0,
        orientation: "vertical"
    });

$("#flat-slider-vertical-4")
    .slider({
        max:250,
        min:170,
        range: "min",
        value: 0,
        orientation: "vertical"
    });

$("#flat-slider-vertical-5")
    .slider({
        max: 6400,
        min: 2700,
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

btns = document.querySelectorAll('span.ui-slider-tip')
island_buttons = document.querySelector('select.form-select')
ele = document.getElementsByName('gender');
btn = document.querySelector('#perso')
var d1 = document.getElementById('prediction');
function check_sex() {
    for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            sex = ele[i].value;
            return sex
        }
};
var titre = document.getElementById('test')

btn.addEventListener('click', function() {
    bill_length_mm=btns[0]['innerText']
    bill_depth_mm=btns[1]['innerText']
    flipper_length_mm=btns[2]['innerText']
    body_mass_g=btns[3]['innerText']
    island=island_buttons.value
    sex = check_sex()
    sexe = sex.toUpperCase()
   
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/predict?island=${island}&bill_length_mm=${bill_length_mm}&bill_depth_mm=${bill_depth_mm}&flipper_length_mm=${flipper_length_mm}&body_mass_g=${body_mass_g}&sex=${sexe}`).then((Response) => {
            return Response.json()
        }).then((data) => {
            titre.innerText = ''
            titre.innerText = `${data['Prediction']}`
        })
  });
 