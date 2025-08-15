export interface VideoItem {
    title: string;
    src: string;
    logo?: string;
}

import daikareel1 from '../assets/Images/daikastore/reels/1.mp4';
import daikareel2 from '../assets/Images/daikastore/reels/2.mp4';
import daykalogo from '../assets/Images/daikastore/logodaykas.jpeg';

// Fireplaces 
import fireplacelogo from '../assets/Images/fireplace/logofireplace.jpg'

import fireplace1 from '../assets/Images/fireplace/reels/Reel 1- Fireplace.mp4'
import fireplace2 from '../assets/Images/fireplace/reels/Reel 2- Fireplace.mp4'
import fireplace3 from '../assets/Images/fireplace/reels/Reel 3- Fireplace.mp4'
import fireplace4 from '../assets/Images/fireplace/reels/Reel 4- Fireplace.mp4'
import fireplace5 from '../assets/Images/fireplace/reels/Reel 5- Fireplace.mp4'
import fireplace6 from '../assets/Images/fireplace/reels/Reel 6- Fireplace.mp4'
import fireplace7 from '../assets/Images/fireplace/reels/Reel 7- Fireplace.mp4'


export const videos: VideoItem[] = [
    {
        title: 'Daykas Store',
        src: daikareel1,
        logo: daykalogo,
    },
    {
        title: 'Daykas Store',
        src: daikareel2,
        logo: daykalogo,
    },
    { title: 'Fireplace', src: fireplace1, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace2, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace3, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace4, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace5, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace6, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace7, logo: fireplacelogo },
];
