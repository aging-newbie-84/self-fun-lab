import React from 'react';
import backdropMain from '../assets/backdrop_main.png';
import bridgeImg from '../assets/bridge_new.png';
import rooftopImg from '../assets/rooftop_new.png';
import schoolBusImg from '../assets/school_bus_new.png';
import laneGolden from '../assets/lane_golden.png';
import templeImg from '../assets/temple_new.png';
import badmintonImg from '../assets/badminton_new.png';
import badmintonEmptyImg from '../assets/badminton_empty.png';
import laneNewImg from '../assets/lane_new.png';
import laneDuskImg from '../assets/lane_dusk.png';
import carImg from '../assets/car.png';

const ImageScene = ({ src, alt }) => (
    <div className="w-full h-full flex items-center justify-center bg-black">
        <img src={src} alt={alt} className="w-full h-full object-cover opacity-80" />
    </div>
);

// Map specific images to semantic scene names
export const SCENE_MAP = {
    bedroom: () => <ImageScene src={backdropMain} alt="Bedroom" />,
    living_room: () => <ImageScene src={backdropMain} alt="Living Room" />,
    lane: () => <ImageScene src={laneNewImg} alt="Lane" />,
    lane_golden: () => <ImageScene src={laneGolden} alt="Lane Golden Hour" />,
    lane_dusk: () => <ImageScene src={laneDuskImg} alt="Lane Dusk" />,
    field: () => <ImageScene src={bridgeImg} alt="Field" />,
    bridge: () => <ImageScene src={bridgeImg} alt="Bridge" />,
    school_bus: () => <ImageScene src={schoolBusImg} alt="School Bus" />,
    temple: () => <ImageScene src={templeImg} alt="Temple" />,
    badminton: () => <ImageScene src={badmintonImg} alt="Badminton Court" />,
    badminton_quiet: () => <ImageScene src={badmintonEmptyImg} alt="Empty Badminton Court" />,
    car: () => <ImageScene src={carImg} alt="Inside Car" />,
    rooftop: () => <ImageScene src={rooftopImg} alt="Rooftop" />,
    junction: () => <ImageScene src={bridgeImg} alt="Junction" />, // Fallback
};

export default SCENE_MAP;
