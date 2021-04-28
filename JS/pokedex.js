
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

char = JSON.parse


function varget(input){


  var list1 = JSON.stringify(input);

  var poke = JSON.parse(list1);
  
  for(i = 0; i < poke.stats.length; i++){

  console.log(poke.stats[i].base_stat); //value of stat
  
  console.log(poke.stats[i].stat.name); //name of stat

  console.log(poke.stats[i].effort); //

  let boxy = document.createElement("div");

  boxy.innerHTML("Yes yes yes");
  document.body.appendChild(boxy);

  }


}

varget(charinput1);
