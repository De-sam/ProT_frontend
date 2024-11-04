"use client"
import { useState } from 'react';
import Sidebar from '@/components/dashboard/sideBar';
import MainContent from '@/components/dashboard/mainContent';

const HomePage = () => {
    const [selectedPage, setSelectedPage] = useState('Dashboard'); // Default page

    const handleNavClick = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar onSelect={handleNavClick} />
            <MainContent selectedPage={selectedPage} />
        </div>
    );
};

export default HomePage;
