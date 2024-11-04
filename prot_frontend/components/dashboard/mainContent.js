// components/MainContent.js
import Image from "next/image";
const MainContent = ({ selectedPage }) => {
    return (
        <main className="flex-1 p-6 bg-gray-50">
            <header className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Welcome Back 👋</h2>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search" className="px-4 py-2 bg-gray-200 rounded-full focus:outline-none" />
                    <span>📧</span>
                    <span>🔔</span>
                    <Image src="https://via.placeholder.com/40" alt="Profile" className="rounded-full" />
                </div>
            </header>

            {selectedPage === 'Measurement' && (
                <div className="mt-6 flex space-x-8">
                    {/* Measurement Section (from your first code snippet) */}
                    <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Set Measurement</h3>
                        <p className="mb-4">Measurement for skirt and blouse (female)</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {/* Example Measurement Fields */}
                            <div className="flex items-center">
                                <span className="w-20 font-semibold">Length</span>
                                <input type="text" defaultValue="20 inch" className="w-full px-2 py-1 border border-gray-300 rounded" />
                                <button className="text-red-500 ml-2">✖</button>
                            </div>
                            {/* Add more fields as needed */}
                        </div>
                    </div>
                    {/* Fitting Details Section */}
                    <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Fitting Details</h3>
                        {/* Fitting Details Content */}
                    </div>
                </div>
            )}

            {selectedPage === 'Dashboard' && (
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 bg-white p-4 rounded-lg shadow-md h-48">Dashboard Content</div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Be the first to know about new fashion trends</h3>
                        <p className="text-gray-500 text-sm mb-4">Subscribe to our newsletter to get updates</p>
                        <form className="flex flex-col">
                            <input type="email" placeholder="Enter Email" className="px-4 py-2 mb-2 border rounded focus:outline-none" />
                            <button type="submit" className="bg-blue-900 text-white py-2 rounded">Subscribe</button>
                        </form>
                    </div>
                </div>
            )}
            {/* Additional content for other pages (Order, Appointment, Analytics) can be added similarly */}
        </main>
    );
};

export default MainContent;
