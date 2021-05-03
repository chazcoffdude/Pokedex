//charmelon
let invent = 
{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 142,
  "height": 11,
  "id": 5,
  "is_default": true,
  "name": "charmeleon",
  "order": 6,
  "stats": [
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 64,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 190
}

let melon = JSON.stringify(invent);

var pokeon = JSON.parse(melon);



document.getElementById("name").innerHTML = pokeon.name;
document.getElementById("type").innerHTML = pokeon.types[0].type.name;
document.getElementById('abilite').innerHTML = pokeon.abilities[0].name;
document.getElementById('abilites').innerHTML = pokeon.abilities[1].name;
document.getElementById('baseXP').innerHTML = pokeon.base_experience;
document.getElementById('height').innerHTML = pokeon.height;
document.getElementById('weight').innerHTML = pokeon.weight;
document.getElementById('hp').innerHTML = pokeon.stats[0].base_stat;
document.getElementById('atk').innerHTML = pokeon.stats[1].base_stat;
document.getElementById('def').innerHTML = pokeon.stats[2].base_stat;
document.getElementById('spatk').innerHTML = pokeon.stats[3].base_stat;
document.getElementById('spdef').innerHTML = pokeon.stats[4].base_stat;
document.getElementById('sped').innerHTML = pokeon.stats[5].base_stat;
document.getElementById('Bhp').innerHTML = pokeon.stats[0].effort;
document.getElementById('Batk').innerHTML = pokeon.stats[1].effort;
document.getElementById('Bdef').innerHTML = pokeon.stats[2].effort;
document.getElementById('Bspatk').innerHTML = pokeon.stats[3].effort;
document.getElementById('Bspdef').innerHTML = pokeon.stats[4].effort;
document.getElementById('Bsped').innerHTML = pokeon.stats[5].effort;