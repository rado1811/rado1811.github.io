import React, { Component } from 'react';
import { Row } from 'reactstrap';
import events from '../events.json';
import EventCard from './EventCard';

class EventList extends Component {
  render() { 
    return (
      <Row>
        {events.slice(1).map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            place={event.place}
            description={event.description}
            buttonLink={event.buttonLink}
            buttonText={event.buttonText}
            date={event.date}
            details={event.details}/>
        ))}
      </Row>
    );
  }
}

export default EventList;