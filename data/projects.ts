import { Project } from '../types';

import proj1Main from '../assets/images/proj_1.jpg';
import proj1Img2 from '../assets/images/proj_1-img_two.jpg';

import proj2Img1 from '../assets/images/proj_2-img_one.jpg';
import proj2Img2 from '../assets/images/proj_2-img_two.jpg';

import proj3Img1 from '../assets/images/proj_3-img_one.jpg';
import proj3Img2 from '../assets/images/proj_3-img_two.jpg';
import proj3Img3 from '../assets/images/proj_3-img_three.jpg';

import proj4Img1 from '../assets/images/proj_4-img_one.jpg';
import proj4Img2 from '../assets/images/proj_4-img_two.jpg';
import proj4Img3 from '../assets/images/proj_4-img_three.jpg';

import proj5Img1 from '../assets/images/proj_5-img-1.jpg';
import proj5Img2 from '../assets/images/proj_5-img-2.jpg';

import proj6Img1 from '../assets/images/proj_6-img-1.jpg';
import proj6Img2 from '../assets/images/proj_6-img-2.jpg';
import proj6Img3 from '../assets/images/proj-6-img-3.jpg';

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'Chesterfield Master Bedroom', 
    category: 'Bedroom', 
    image: proj1Main,
    description: 'A luxurious master bedroom centred around a custom Chesterfield-style bed with deep button-tufted velvet upholstery. The full-frame design — including the headboard, side rails, and foot bench — is handcrafted to create a cohesive, hotel-grade aesthetic with ambient LED ceiling lighting.',
    images: [
      proj1Main,
      proj1Img2,
    ]
  },
  { 
    id: 2, 
    title: 'Cream Leather Bedroom Suite', 
    category: 'Bedroom', 
    image: proj2Img1,
    description: 'A refined bedroom suite upholstered entirely in premium cream leather. The panelled headboard and matching bed frame feature clean geometric stitching, complemented by terracotta accent cushions. Designed for clients who prefer understated elegance with a warm, contemporary feel.',
    images: [
      proj2Img1,
      proj2Img2,
    ]
  },
  { 
    id: 3, 
    title: 'Walnut Slat TV & Fireplace Wall', 
    category: 'Living Room', 
    image: proj3Img1,
    description: 'A floor-to-ceiling feature wall built from rich walnut-finish slat panelling, housing a recessed TV niche and an integrated electric fireplace below. The project documents the full build process — from structural framing to the finished installation — demonstrating our craftsmanship at every stage.',
    images: [
      proj3Img1,
      proj3Img2,
      proj3Img3,
    ]
  },
  { 
    id: 4, 
    title: 'Grey Velvet Bedroom', 
    category: 'Bedroom', 
    image: proj4Img1,
    description: 'A sophisticated bedroom featuring a custom grey velvet bed with a tall channelled headboard and matching upholstered base. Paired with sleek white bedside tables and warm pendant lighting, the design balances softness and structure for a modern, boutique-hotel atmosphere.',
    images: [
      proj4Img1,
      proj4Img2,
      proj4Img3,
    ]
  },
  { 
    id: 5, 
    title: 'Dark Marble TV & Fireplace Wall', 
    category: 'Living Room', 
    image: proj5Img1,
    description: 'A bold living room centrepiece combining dark vertical slat panelling with a large-format white marble slab as the TV backing. Flanked by illuminated glass display shelves with LED strip lighting, this wall unit merges dramatic contrast with practical storage in a single statement piece.',
    images: [
      proj5Img1,
      proj5Img2,
    ]
  },
  { 
    id: 6, 
    title: 'Boutique Display Wall', 
    category: 'Commercial', 
    image: proj6Img1,
    description: 'A custom commercial display wall designed for a retail interior. Walnut-finish cabinetry frames a series of deep, illuminated niches finished in vibrant yellow lacquer with button-tufted leather back panels. Each niche features recessed spotlights and glass shelving, creating a striking product showcase.',
    images: [
      proj6Img1,
      proj6Img2,
      proj6Img3,
    ]
  },
];
