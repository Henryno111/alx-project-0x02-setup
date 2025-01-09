import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Search, Bell, User } from 'lucide-react';
import { NavigationItem, HeaderProps } from '../../interfaces';

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const router = useRouter();
    
    // Define navigation items
    const navigation: NavigationItem[] = [
      {
        name: 'default',
        href: '/',
      },
      {
        name: 'Home',
        href: '/home',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Posts',
        href: '/posts',
      }
    ];
  
    // Function to check if link is active
    const isActiveLink = (href: string): boolean => {
      if (href === '/') {
        return router.pathname === href;
      }
      return router.pathname.startsWith(href);
    };

    return (
        <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left section */}
              <div className="flex items-center">
                <button
                  onClick={onMenuClick}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" />
                </button>
                
                <Link href="/" className="ml-4 flex items-center">
                  <span className="text-xl font-bold text-indigo-600">ALX</span>
                </Link>
    
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 ml-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                        isActiveLink(item.href)
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
    
              {/* Right section */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                    />
                  </div>
                </div>
    
                {/* Notifications */}
                <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                </button>
    
                {/* Profile dropdown */}
                <div className="relative">
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <User className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    };
    
    export default Header;