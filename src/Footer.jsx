import React from 'react';
import data from './data/team.json';

function Footer() {
  return (
    <>
      <div>
        <p>Chingu Team 16 of Voyage 49, Tier 2</p>
        {data.map((dev, index) => (
          <p key={index}>{dev.name}</p>
        ))}
      </div>
    </>
  );
}

export default Footer;
