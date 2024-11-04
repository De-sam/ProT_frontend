// components/Sidebar.js

'use client'; // This component is a client component since it uses router

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Sidebar = ({ onSelect }) => {
    const router = useRouter();
    const navItems = [
        { name: 'Dashboard', icon: '🏠', path: '/' },
        { name: 'Measurement', icon: '📏', path: '/measurement' },
        { name: 'Order', icon: '📦', path: '/order' },
        { name: 'Appointment', icon: '📅', path: '/appointment' },
        { name: 'Analytics', icon: '📊', path: '/analytics' },
    ];

    const handleNavigation = (item) => {
        router.push(item.path);
        onSelect(item.name);
    };

    return (
        <aside className="w-64 bg-blue-900 text-white flex flex-col items-center py-4">
            <h1 className="text-2xl font-bold mb-6">FashionFi</h1>
            <div className="text-center mb-8">
                <Image src="https://via.placeholder.com/80" alt="User profile" className="rounded-full mb-2" />
                <h2 className="text-lg font-semibold">Samson</h2>
                <p className="text-sm opacity-75">Fashion Designer</p>
                <button className="mt-2 px-4 py-1 bg-blue-700 rounded">Edit Profile</button>
            </div>

            <nav className="flex flex-col w-full px-4">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        onClick={() => handleNavigation(item)}
                        className={`flex items-center px-4 py-2 mb-2 cursor-pointer ${item.path === router.pathname ? 'bg-blue-800' : 'hover:bg-blue-700'} rounded text-white`}
                    >
                        <span className="mr-2">{item.icon}</span> {item.name}
                    </a>
                ))}
            </nav>

            <button className="mt-auto px-4 py-2 bg-blue-800 w-full text-center hover:bg-blue-700">Logout</button>
        </aside>
    );
};

export default Sidebar;
