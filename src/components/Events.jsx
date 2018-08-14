import React, { Component } from 'react';
import { Button } from 'reactstrap';
import EventsList from './EventsList';
import EventsSlider from './slider/SliderEvents';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      showEvents: false,
    };
  }

  toggleEvents() {
    this.setState({
      showEvents: !this.state.showEvents,
    })
  }

  render() {
    return (
      <div>
        <EventsSlider />
        <Button
          style={{ margin: '20px' }}
          outline
          color="secondary"
          onClick={() => this.toggleEvents()}>Liste complète</Button>
        {this.state.showEvents && <EventsList />}
      </div>
    );
  }
};

export default Events;
