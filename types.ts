export interface ColorOption {
  name: string;
  hex: string;
  class: string;
}

export interface FurnitureItem {
  id: string;
  name: string;
  category: 'Bedroom' | 'Living Room' | 'Storage';
  image: string;
  baseColor: string; 
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  images?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}