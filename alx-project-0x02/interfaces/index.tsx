// Basic user interface
export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // API response wrapper interface
  export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    success: boolean;
  }
  
  // Pagination interface
  export interface PaginationParams {
    page: number;
    limit: number;
    total?: number;
  }
  
  // Sort and filter options interface
  export interface QueryOptions {
    sort?: {
      field: string;
      order: 'asc' | 'desc';
    };
    filters?: {
      [key: string]: string | number | boolean | null;
    };
  }
  
  // Common form field interface
  export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'number' | 'email' | 'password' | 'select' | 'checkbox';
    value: string | number | boolean;
    required?: boolean;
    disabled?: boolean;
    options?: Array<{
      label: string;
      value: string | number;
    }>;
  }
  
  // Component props interface with children
  export interface BaseComponentProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
  
  // Theme configuration interface
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      error: string;
      success: string;
    };
    typography: {
      fontFamily: string;
      fontSize: {
        small: string;
        medium: string;
        large: string;
      };
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
  
  // Error handling interface
  export interface ErrorState {
    message: string;
    code?: string;
    field?: string;
    stack?: string;
  }
  
  // Navigation item interface
  export interface NavigationItem {
    id: string;
    label: string;
    path: string;
    icon?: string;
    children?: NavigationItem[];
    permissions?: string[];
  }
  
  // User settings interface
  export interface UserSettings {
    theme: 'light' | 'dark' | 'system';
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    language: string;
    timezone: string;
  }