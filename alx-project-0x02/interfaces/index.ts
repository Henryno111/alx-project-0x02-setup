// Basic user interface
export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface NavigationItem {
    name: string;
    href: string;
    icon?: React.ComponentType;
  }
  
  export interface HeaderProps {
    onMenuClick?: () => void;
  }

  export interface CardProps {
    title: string;
    content: string;
  }

  export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
  }
