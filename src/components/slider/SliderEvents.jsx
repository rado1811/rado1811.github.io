import React from 'react';
import Slider from 'react-animated-slider';
import { Button } from 'reactstrap';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import 'normalize.css/normalize.css';
import './manifestations.css';
import events from '../../events.json';

const eventsSlider = () => (
  <div>
		<Slider className="slider-wrapper ">
			{events.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
            <h5>{item.place} - {item.date}</h5>
						<h5>{item.description}</h5>
						<Button outline color="danger"><a href={item.buttonLink} target="_blank" rel="noopener noreferrer" style={{ color: "white"}}>{item.buttonText}</a></Button>
					</div>
				</div>
			))}
		</Slider>
	</div>
)

export default eventsSlider;