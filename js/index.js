//var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
//  return new bootstrap.Tooltip(tooltipTriggerEl)
//}) bootstrap popover

function roundTo(n, digits) {
  var negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    n = (n * -1).toFixed(digits);
  }
  return n;
}


document.getElementById('carbon').addEventListener('change', erw);
document.getElementById('silica').addEventListener('change', erw);
document.getElementById('phosphorus').addEventListener('change', erw);

function erw() {
  //document.getElementById("erw").innerText = document.getElementById('carbon').value*document.getElementById('silica').value*document.getElementById('phosphorus').value;
  let carbon = document.getElementById('carbon').value;
  let silica = document.getElementById('silica').value;
  let phosphorus = document.getElementById('phosphorus').value;
  document.getElementById("erw").innerText = roundTo((1 / (carbon - silica * 0.3 - phosphorus * 0.36)), 2);
}

function hideAllInputs() {
  for (iterator of document.getElementById('list-of-inputs').children) {
    iterator.classList.add("hidden");



  }
}

function unhide_GJL100() {
  hideAllInputs();
  document.getElementById('carbon').parentElement.classList.remove('hidden');
  document.getElementById('silica').parentElement.classList.remove('hidden');
  document.getElementById('manganeese').parentElement.classList.remove('hidden');
  document.getElementById('phosphorus').parentElement.classList.remove('hidden');
  document.getElementById('sulphur').parentElement.classList.remove('hidden');
}

function unhide_GJL150() {
  hideAllInputs();
  document.getElementById('carbon').parentElement.classList.remove('hidden');
  document.getElementById('silica').parentElement.classList.remove('hidden');
  document.getElementById('manganeese').parentElement.classList.remove('hidden');
  document.getElementById('phosphorus').parentElement.classList.remove('hidden');
  document.getElementById('sulphur').parentElement.classList.remove('hidden');
}

function unhide_GJL200() {
  hideAllInputs();
  document.getElementById('carbon').parentElement.classList.remove('hidden');
  document.getElementById('silica').parentElement.classList.remove('hidden');
  document.getElementById('manganeese').parentElement.classList.remove('hidden');
  document.getElementById('phosphorus').parentElement.classList.remove('hidden');
  document.getElementById('sulphur').parentElement.classList.remove('hidden');
  document.getElementById('chromium').parentElement.classList.remove('hidden');

}

function unhide_GJL250() {
  hideAllInputs();
  document.getElementById('carbon').parentElement.classList.remove('hidden');
  document.getElementById('silica').parentElement.classList.remove('hidden');
  document.getElementById('manganeese').parentElement.classList.remove('hidden');
  document.getElementById('phosphorus').parentElement.classList.remove('hidden');
  document.getElementById('sulphur').parentElement.classList.remove('hidden');
  document.getElementById('chromium').parentElement.classList.remove('hidden');
}

function unhide_GJL300() {
  hideAllInputs();
  document.getElementById('carbon').parentElement.classList.remove('hidden');
  document.getElementById('silica').parentElement.classList.remove('hidden');
  document.getElementById('manganeese').parentElement.classList.remove('hidden');
  document.getElementById('phosphorus').parentElement.classList.remove('hidden');
  document.getElementById('sulphur').parentElement.classList.remove('hidden');
  document.getElementById('chromium').parentElement.classList.remove('hidden');
}

function unhide_GJL350() {
  hideAllInputs();
  document.getElementById('carbon').parentElement.classList.remove('hidden');
  document.getElementById('silica').parentElement.classList.remove('hidden');
  document.getElementById('manganeese').parentElement.classList.remove('hidden');
  document.getElementById('phosphorus').parentElement.classList.remove('hidden');
  document.getElementById('sulphur').parentElement.classList.remove('hidden');
  document.getElementById('chromium').parentElement.classList.remove('hidden');
}

const alloys = {

  'EN-GJL-100': {
    0: unhide_GJL100,
    carbonMin: 3.00,
    silicaMin: 2.10,
    manganeeseMin: 0.65,
    phosphorusMin: 0.00,
    sulphurMin: 0.00,

    carbonMax: 3.50,
    silicaMax: 2.60,
    manganeeseMax: 0.80,
    phosphorusMax: 0.50,
    sulphurMax: 0.15,
  },


  'EN-GJL-150': {
    0: unhide_GJL150,
    carbonMin: 3.10,
    silicaMin: 1.80,
    manganeeseMin: 0.65,
    phosphorusMin: 0.00,
    sulphurMin: 0.00,

    carbonMax: 3.60,
    silicaMax: 2.40,
    manganeeseMax: 0.80,
    phosphorusMax: 0.50,
    sulphurMax: 0.15,
  },

  'EN-GJL-200': {
    0: unhide_GJL200,
    carbonMin: 3.20,
    silicaMin: 1.60,
    manganeeseMin: 0.60,
    phosphorusMin: 0.00,
    sulphurMin: 0.00,
    chromiumMin: 0.00,


    carbonMax: 3.60,
    silicaMax: 2.30,
    manganeeseMax: 1.00,
    phosphorusMax: 0.30,
    sulphurMax: 0.15,
    chromiumMax: 0.35,
  },

  'EN-GJL-250': {
    0: unhide_GJL250,
    carbonMin: 2.90,
    silicaMin: 1.60,
    manganeeseMin: 0.70,
    phosphorusMin: 0.00,
    sulphurMin: 0.00,
    chromiumMin: 0.00,

    carbonMax: 3.40,
    silicaMax: 2.00,
    manganeeseMax: 1.10,
    phosphorusMax: 0.30,
    sulphurMax: 0.15,
    chromiumMax: 0.50,
  },

  'EN-GJL-300': {
    0: unhide_GJL300,
    carbonMin: 2.80,
    silicaMin: 1.00,
    manganeeseMin: 1.10,
    phosphorusMin: 0.00,
    sulphurMin: 0.00,
    chromiumMin: 0.00,

    carbonMax: 3.20,
    silicaMax: 1.80,
    manganeeseMax: 1.45,
    phosphorusMax: 0.35,
    sulphurMax: 0.15,
    chromiumMax: 0.60,
  },

  'EN-GJL-350': {
    0: unhide_GJL350,
    carbonMin: 2.80,
    silicaMin: 0.90,
    manganeeseMin: 1.10,
    phosphorusMin: 0.00,
    sulphurMin: 0.00,
    chromiumMin: 0.00,

    carbonMax: 3.20,
    silicaMax: 1.70,
    manganeeseMax: 1.5,
    phosphorusMax: 0.35,
    sulphurMax: 0.15,
    chromiumMax: 0.60,
  },
};


Object.keys(alloys).forEach((elementInArray) => {
  let alloyToAppend = document.createElement("option");
  alloyToAppend.innerHTML = elementInArray;
  document.getElementById("alloy-drop-down").appendChild(alloyToAppend);
  //document.getElementById('silica').addEventListener('change', erw);
});

document.getElementById("alloy-drop-down").addEventListener('change', alloy_selection);

function alloy_selection() {

  document.querySelectorAll('input').forEach((item) => {
    document.getElementById(item.id).classList.remove("green");
    document.getElementById(item.id).classList.remove("red");
  })


  Object.keys(alloys).forEach((elementInArray) => {
    if (elementInArray == this.value) {
      alloys[this.value][0]();
    }
  });
}

for (var i = 0; i < document.querySelectorAll('.green').length; i++) {
  console.log[i];

}


function resetInputsBackground() {
  document.querySelectorAll('input').forEach((item) => {
    document.getElementById(item.id).addEventListener('change', () => {
      document.getElementById(item.id).classList.remove("green");
      document.getElementById(item.id).classList.remove("red");
      console.log(item.id)
    });
  });
}

document.getElementById("chem-comp-calculate").addEventListener('click', chemCompCalculateClicked);

function chemCompCalculateClicked() {

  let pickedAlloy = document.getElementById("alloy-drop-down").value;

  if (pickedAlloy == "Wybierz gatunek żeliwa") {
    document.getElementById('alloy-drop-down').classList.add('blink');
    return;
  }
    else {
      document.getElementById('alloy-drop-down').classList.remove('blink');

    }

  document.querySelectorAll('#list-of-inputs div:not(.hidden) > input').forEach((item) => {



    let insertedValueToCheck = document.getElementById(item.id).value;
    let valueMinToCheck = (item.id) + 'Min';
    let valueMaxToCheck = (item.id) + 'Max';

    if (insertedValueToCheck >= alloys[pickedAlloy][valueMinToCheck] && insertedValueToCheck <= alloys[pickedAlloy][valueMaxToCheck]) {
      document.getElementById(item.id).classList.add("green");

    } else {
      document.getElementById(item.id).classList.add("red");
    }

  });;

  resetInputsBackground()
}
