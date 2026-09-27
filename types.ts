export interface Project {
  id: number;
  title: string;
  category: 'Bedroom' | 'Living Room' | 'Commercial';
  image: string;
  description: string;
  images: string[];
}
