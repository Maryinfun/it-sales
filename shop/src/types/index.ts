export interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    products: Product[];
  }
  
  export interface MenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
  }