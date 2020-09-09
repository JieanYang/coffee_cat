
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { echo } from '../../../store/actions'
import Cover from '../2_component/Cover'

export function Preview() {
  // DATA
  const regions = [
  {
  id: 1,
  name: 'Kanto',
  pokemons: [
  { id: 4, name: 'Salamèche', level: 3 },
  { id: 25, name: 'Pikachu', level: 12 },
  ],
  },
  {
  id: 2,
  name: 'Johto',
  pokemons: [
  { id: 1, name: 'Bulbizarre', level: 12 },
  { id: 21, name: 'Piafabec', level: 3 },
  ],
  },
  {
  id: 3,
  name: 'Hoenn',
  pokemons: [
  { id: 81, name: 'Magnéti', level: 15 },
  { id: 80, name: 'Flagadoss', level: 55 },
  { id: 84, name: 'Doduo', level: 5 },
  { id: 126, name: 'Magmar', level: 16 },
  ],
  },
  ];
  const bag = {
  badges: [
  { name: 'Boulder', level: 7 },
  { name: 'Cascade', level: 17 },
  ],
  pokemons: [
  { id: 84, name: 'Doduo', level: 11 },
  { id: 25, name: 'Pikachu', level: 15 },
  ],
  };
  
  return <CatchablePokemonList regions={regions} bag={bag}/>;
  }
  

const CatchablePokemonList = ({ regions, bag }) => {
  const [region, setRegion] = useState("Kanto");

  let hightest_level = 0;
  for(var x of bag.badges) {
    if(x.level > hightest_level) {
      hightest_level = x.level;
    }
  }
  
  let bag_pokemon = [];
  for(var x of bag.pokemons) {
    bag_pokemon.push(x.name);
  }

  const handleSelect = (event) => {
    setRegion(event.target.value);
  }

  let info_region = regions.filter(item => item.name === region)[0];
  
  return (
    <div>
      <div>
      <select name="region" id="region-select" onChange={handleSelect}>
        {regions.map(region => 
          <option key={region.id} value={region.name}>{region.name}</option>
          )
        }
      </select>
      <ul>
        {info_region.pokemons.map(item => 
          <li key={item.id}>
            {item.name} 
            ,
            {
              hightest_level >= item.level && "you can catch" 
              ||
              hightest_level < item.level && "you can't catch"
            }  
            ,
            {
              bag_pokemon.includes(item.name) && "you have"
              ||
              !bag_pokemon.includes(item.name) && "you haven't"
            }
          </li>
        )
        }
      </ul>
      </div>
    </div>
  );
}

export default connect()(Preview);