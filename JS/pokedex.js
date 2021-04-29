//charmander
let charinput1 = 
{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 62,
  "height": 6,
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "order": 5,
  "stats": [
    {
      "base_stat": 39,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 52,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 43,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 60,
      "effort": 0,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 50,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 65,
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
  "weight": 85
}


let char = JSON.stringify(charinput1);

var char2 = JSON.parse(char);


function varget(input){


  var list1 = JSON.stringify(input);

  var poke = JSON.parse(list1);
  
  for(i = 0; i < poke.stats.length; i++){

  console.log(poke.stats[i].base_stat); //value of stat
  
  console.log(poke.stats[i].stat.name); //name of stat

  console.log(poke.stats[i].effort); //

  let boxy = document.createElement("div");

  boxy.write("Yes yes yes"); //e
  document.body.appendChild(boxy);

  }


}
document.getElementById('name').innerHTML = char2.name;
document.getElementById('type').innerHTML = char2.types[0].type.name;
document.getElementById('abilite').innerHTML = char2.abilities[0].name;
document.getElementById('abilites').innerHTML = char2.abilities[1].name;
document.getElementById('baseXP').innerHTML = char2.base_experience;
document.getElementById('height').innerHTML = char2.height;
document.getElementById('weight').innerHTML = char2.weight;
document.getElementById('hp').innerHTML = char2.stats[0].base_stat;
document.getElementById('atk').innerHTML = char2.stats[1].base_stat;
document.getElementById('def').innerHTML = char2.stats[2].base_stat;
document.getElementById('spatk').innerHTML = char2.stats[3].base_stat;
document.getElementById('spdef').innerHTML = char2.stats[4].base_stat;
document.getElementById('sped').innerHTML = char2.stats[5].base_stat;
document.getElementById('Bhp').innerHTML = char2.stats[0].effort;
document.getElementById('Batk').innerHTML = char2.stats[1].effort;
document.getElementById('Bdef').innerHTML = char2.stats[2].effort;
document.getElementById('Bspatk').innerHTML = char2.stats[3].effort;
document.getElementById('Bspdef').innerHTML = char2.stats[4].effort;
document.getElementById('Bsped').innerHTML = char2.stats[5].effort;
varget(charinput1);

//charmelon
let inventory = 
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

let melon = JSON.stringify(inventory);

var pokeon = JSON.parse(melon);
document.getElementById("name2").innerHTML = pokeon.name;
document.getElementById('type2').innerHTML = pokeon.types[0].type.name;
document.getElementById('abilite2').innerHTML = pokeon.abilities[0].name;
document.getElementById('abilites2').innerHTML = pokeon.abilities[1].name;
document.getElementById('baseXP2').innerHTML = pokeon.base_experience;
document.getElementById('height2').innerHTML = pokeon.height;
document.getElementById('weight2').innerHTML = pokeon.weight;
document.getElementById('hp2').innerHTML = pokeon.stats[0].base_stat;
document.getElementById('atk2').innerHTML = pokeon.stats[1].base_stat;
document.getElementById('def2').innerHTML = pokeon.stats[2].base_stat;
document.getElementById('spatk2').innerHTML = pokeon.stats[3].base_stat;
document.getElementById('spdef2').innerHTML = pokeon.stats[4].base_stat;
document.getElementById('sped2').innerHTML = pokeon.stats[5].base_stat;
document.getElementById('Bhp2').innerHTML = pokeon.stats[0].effort;
document.getElementById('Batk2').innerHTML = pokeon.stats[1].effort;
document.getElementById('Bdef2').innerHTML = pokeon.stats[2].effort;
document.getElementById('Bspatk2').innerHTML = pokeon.stats[3].effort;
document.getElementById('Bspdef2').innerHTML = pokeon.stats[4].effort;
document.getElementById('Bsped2').innerHTML = pokeon.stats[5].effort;
varget(inventory);
