import React from 'react';
import backdropMain from '../assets/backdrop_main.png';
import bridgeImg from '../assets/Bridge.png';
import rooftopImg from '../assets/Rooftop.png';
import schoolBusImg from '../assets/School Lane & Sports.png';
import laneGolden from '../assets/Lane 2.png';
import templeImg from '../assets/Golden Light J Temple.png';
import badmintonImg from '../assets/Indoor Badminton Court.png';
import badmintonEmptyImg from '../assets/Badminton Court Empty.png';
import laneNewImg from '../assets/Lane 2.png';
import laneDuskImg from '../assets/Twilight in a BBSR Lane.png';
import carImg from '../assets/Car.png';
import fieldImg from '../assets/Serene Grass Field in hot Sun.png';
import rooftopGolden from '../assets/Golden Hour Rooftop.png';
import rooftopTwilight from '../assets/Twilight Rooftop with hanging laundry.png';

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
    field: () => <ImageScene src={fieldImg} alt="Field" />,
    bridge: () => <ImageScene src={bridgeImg} alt="Bridge" />,
    school_bus: () => <ImageScene src={schoolBusImg} alt="School Bus" />,
    temple: () => <ImageScene src={templeImg} alt="Temple" />,
    badminton: () => <ImageScene src={badmintonImg} alt="Badminton Court" />,
    badminton_quiet: () => <ImageScene src={badmintonEmptyImg} alt="Empty Badminton Court" />,
    car: () => <ImageScene src={carImg} alt="Inside Car" />,
    rooftop: () => <ImageScene src={rooftopImg} alt="Rooftop" />,
    rooftop_golden: () => <ImageScene src={rooftopGolden} alt="Rooftop Golden" />,
    rooftop_twilight: () => <ImageScene src={rooftopTwilight} alt="Rooftop Twilight" />,
    junction: () => <ImageScene src={bridgeImg} alt="Junction" />, // Fallback
};

export default SCENE_MAP;
