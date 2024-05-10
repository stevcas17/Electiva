import { useDebugValue, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TealiumComponent = () => {
  useDebugValue('site hooks statistics');
  const [tealium, setTealium] = useState(null);
  useEffect(() => {
    if (tealium && typeof tealium === 'object' && typeof tealium.type === 'string') {
      applyTealium(tealium);
    }
  }, [tealium]);
  return { tealium, setTealium };
};

export const applyTealium = tealium => {
  if (window['utag'] && typeof window['utag'][tealium.type] === 'function') {
    if (tealium.type === 'track' && !tealium.event_type)
      return console.error('Could not issue tealium event, event_type is not defined and is mandatory for track type');
    const currentStructure = {};
    for (const property in tealium.structure) {
      currentStructure[property] = tealium.structure[property];
    }
    tealium.type === 'track'
      ? window['utag'][tealium.type](tealium.event_type, currentStructure)
      : window['utag'][tealium.type](currentStructure);
  }
};

TealiumComponent.propTypes = {
  type: PropTypes.oneOf(['view', 'link', 'track']).isRequired,
  structure: PropTypes.object.isRequired
};

export default TealiumComponent;
