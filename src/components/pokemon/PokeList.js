import React, { Component } from 'react';
import axios from 'axios';

import PokeCard from './PokeCard';
// import Next from '../layout/Next';

export default class PokeList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: null,
    next: ''
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    console.log(res)
    this.setState({ 
      pokemon: res.data['results'],
      next: res.data['next'] })
  }

  render() {
    return (
      <>
        {this.state.pokemon ? 
          <div className="row">
            {this.state.pokemon.map(pokemon => 
              <PokeCard key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        />
            )}
          </div>
        : 
          <h1>Loading Pokemon</h1>
        }
      {/* <Next next={this.state.next} /> */}
      </>
    )
  }
}
