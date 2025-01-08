// Basic user interface
export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface NavigationItem {
    name: string;
    href: string;
    icon?: React.ComponentType;
  }
  
  interface HeaderProps {
    onMenuClick?: () => void;
  }