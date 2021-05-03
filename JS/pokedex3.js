let chair = 
{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
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
      },
      {
        "slot": 2,
        "type": {
          "name": "flying"
        }
      }
    ],
    "weight": 905
  }


let iceT = JSON.stringify(chair);

var have = JSON.parse(iceT);

document.getElementById("name").innerHTML = have.name;
document.getElementById("type").innerHTML = have.types[0].type.name;
document.getElementById("type2").innerHTML = have.types[1].type.name;
document.getElementById('abilite').innerHTML = have.abilities[0].name;
document.getElementById('abilites').innerHTML = have.abilities[1].name;
document.getElementById('baseXP').innerHTML = have.base_experience;
document.getElementById('height').innerHTML = have.height;
document.getElementById('weight').innerHTML = have.weight;
document.getElementById('hp').innerHTML = have.stats[0].base_stat;
document.getElementById('atk').innerHTML = have.stats[1].base_stat;
document.getElementById('def').innerHTML = have.stats[2].base_stat;
document.getElementById('spatk').innerHTML = have.stats[3].base_stat;
document.getElementById('spdef').innerHTML = have.stats[4].base_stat;
document.getElementById('sped').innerHTML = have.stats[5].base_stat;
document.getElementById('Bhp').innerHTML = have.stats[0].effort;
document.getElementById('Batk').innerHTML = have.stats[1].effort;
document.getElementById('Bdef').innerHTML = have.stats[2].effort;
document.getElementById('Bspatk').innerHTML = have.stats[3].effort;
document.getElementById('Bspdef').innerHTML = have.stats[4].effort;
document.getElementById('Bsped').innerHTML = have.stats[5].effort;