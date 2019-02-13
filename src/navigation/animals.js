import React, { Component } from 'react';

import { getAnimals } from '../actions/services';
import Card from '../components/card/card';
import Container from '../components/container/container';

class Animals extends Component {
  state = {
    animals: []
  }

  async componentDidMount() {
    try {
      const { data } = await getAnimals();
      this.setState({ animals: data });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  render() {
    const { animals } = this.state;

    return (
      <Container {...this.props}>
        {animals.map(animal => <Card key={animal.Id} data={animal} />)}
      </Container>
    )
  }
}

export default Animals;