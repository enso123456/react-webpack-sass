import React, { Component } from 'react';

import { getVegies } from '../actions/services';
import Card from '../components/card/card';
import Container from '../components/container/container';

class Vegies extends Component {
  state = {
    vegies: []
  }

  async componentDidMount() {
    try {
      const { data } = await getVegies();
      this.setState({ vegies: data });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  render() {
    const { vegies } = this.state;

    return (
      <Container {...this.props}>
        {vegies.map(vegie => <Card key={vegie.Id} data={vegie} />)}
      </Container>
    )
  }
}

export default Vegies;