import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Sidebar = ({ onSelect }) => {
    const router = useRouter();

    const logoutUser = async () => {
        const refreshToken = localStorage.getItem('refresh_token');

        try {
            const response = await axios.post(
                '/api/userauth/logout/',
                { refresh: refreshToken },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            );

            console.log(response.data); // Log response if needed

            // Clear tokens from local storage
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

            // Redirect to login page
            router.push('/login');  // Navigate to login page
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleLogoutClick = () => {
            logoutUser();
    };

    const navItems = [
        { name: 'Dashboard', icon: '🏠' },
        { name: 'Measurement', icon: '📏' },
        { name: 'Order', icon: '📦' },
        { name: 'Appointment', icon: '📅' },
        { name: 'Analytics', icon: '📊' },
    ];

    return (
        <aside className="w-64 bg-blue-900 text-white flex flex-col items-center py-4">
            <h1 className="text-2xl font-bold mb-6">FashionFi</h1>
            <div className="text-center mb-8">
                <Image
                    src="https://via.placeholder.com/80"
                    alt="User profile"
                    className="rounded-full mb-2"
                    width={80}
                    height={80}
                />
                <h2 className="text-lg font-semibold">Samson</h2>
                <p className="text-sm opacity-75">Fashion Designer</p>
                <button className="mt-2 px-4 py-1 bg-blue-700 rounded">Edit Profile</button>
            </div>

            <nav className="flex flex-col w-full px-4">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.path}
                        onClick={() => onSelect(item.name)}
                        className={`flex items-center px-4 py-2 mb-2 ${
                            router.pathname === item.path ? 'bg-blue-800' : 'hover:bg-blue-700'
                        } rounded text-white`}
                    >
                        <span className="mr-2">{item.icon}</span> {item.name}
                    </a>
                ))}
            </nav>

            <button
                onClick={handleLogoutClick}
                className="mt-auto px-4 py-2 bg-blue-800 w-full text-center hover:bg-blue-700"
            >
                Logout
            </button>
        </aside>
    );
};

export default Sidebar;
