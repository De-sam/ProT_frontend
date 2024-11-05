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
                    <Image src="https://via.placeholder.com/40" alt="Profile" width={40} height={40} className="rounded-full" />
                </div>
            </header>

            {selectedPage === 'Measurement' && (
                <div className="mt-6 flex space-x-4">
                    {/* Measurement Section */}
                    <div className="flex-1 space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Set Measurement</h2>
                            <p className="text-gray-500 mb-4">Measurement for skirt and blouse (female)</p>
                            <div className="grid grid-cols-3 gap-4">
                                {/* Measurement Fields */}
                                {["Length", "Waist", "Hip", "Shoulder", "Hand"].map((measurement, index) => (
                                    <div className="flex items-center space-x-2" key={index}>
                                        <input type="text" value={measurement} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700" readOnly />
                                        <input type="text" value={`${(index + 1) * 5} inch`} className="bg-gray-200 px-4 py-2 rounded-lg" />
                                        <button className="text-red-500 font-semibold">✖️</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Selected Measurement */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Selected Measurement</h2>
                            <div className="grid grid-cols-3 gap-4">
                                {["Length", "Waist"].map((measurement, index) => (
                                    <div className="flex items-center space-x-2" key={index}>
                                        <input type="text" value={measurement} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700" readOnly />
                                        <input type="text" value={`${(index + 1) * 10} inch`} className="bg-gray-200 px-4 py-2 rounded-lg" />
                                    </div>
                                ))}
                                <button className="col-span-3 bg-gray-200 text-center rounded-lg py-2 mt-4">+ Add New Field</button>
                            </div>
                        </div>
                    </div>

                    {/* Fitting Details and Upload Section */}
                    <div className="w-1/3 space-y-4">
                        {/* Fitting Details */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Fitting Details</h2>
                            <p className="text-gray-500 mb-2">Fill in the client details</p>
                            <label className="text-sm font-semibold">Fitting Name:</label>
                            <input type="text" value="Skirt & Blouse" className="bg-gray-200 w-full px-4 py-2 rounded-lg mb-4" />
                            <label className="text-sm font-semibold">Measurement</label>
                            <div className="space-y-2 mt-2">
                                <input type="text" value="Blouse" className="bg-gray-200 w-full px-4 py-2 rounded-lg" readOnly />
                                <input type="text" value="Skirt" className="bg-gray-200 w-full px-4 py-2 rounded-lg" readOnly />
                                <button className="bg-gray-200 w-full text-center rounded-lg py-2 mt-4">+ Add New Field</button>
                            </div>
                        </div>

                        {/* Upload Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Upload Fitting Style, Fabrics Image and Texture Quality</h2>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                <p className="text-gray-400">Upload/Drag and Drop Image</p>
                                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Upload</button>
                            </div>
                        </div>

                        {/* Save Button */}
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">Save</button>
                    </div>
                </div>
            )}

            {selectedPage === 'Order' && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="space-y-2">
                                <div className="text-sm font-semibold text-blue-500 bg-blue-100 rounded-full px-3 py-1 w-max">In Progress</div>
                                <h2 className="text-lg font-semibold">Order #cl5913m</h2>
                                <p>Item: Skirt & Blouse</p>
                                <p>Courier: Uber Ride</p>
                                <p>Start time: 02 Nov 2024, 15:23:43</p>
                                <p>Address: Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2">Save</button>
                                <button className="bg-blue-600 text-white rounded-lg px-4 py-2">View Details</button>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between text-sm text-gray-600">
                                <div>
                                    <h3 className="font-semibold">Order History</h3>
                                    <p>Item Packaging: 02/11/2024 3:00pm <span className="text-blue-600 cursor-pointer">see details</span></p>
                                    <p>Order Confirmed: 02/11/2024 3:00pm <span className="text-blue-600 cursor-pointer">see details</span></p>
                                    <p>Order Placed: 10/11/2024 4:00pm <span className="text-blue-600 cursor-pointer">see details</span></p>
                                </div>
                                <div>
                                    <p>Tracking Number: 3409-1243-0087</p>
                                    <p>Warehouse: Fashion Complex Store</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Section */}
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Payment</h2>
                        <div className="flex mb-4">
                            <button className="border border-gray-300 rounded-l-lg px-6 py-2 bg-white">Card</button>
                            <button className="border-t border-b border-gray-300 px-6 py-2 bg-white">Google Pay</button>
                            <button className="border border-gray-300 rounded-r-lg px-6 py-2 bg-white">Bank</button>
                        </div>
                        <div className="space-y-4">
                            <input type="text" placeholder="Card number" className="w-full bg-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <div className="flex space-x-4">
                                <input type="text" placeholder="Expiry (MM/YY)" className="flex-1 bg-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                                <input type="text" placeholder="CVC" className="flex-1 bg-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="billing" className="h-4 w-4 text-blue-600 rounded" />
                                <label htmlFor="billing" className="text-gray-600">Billing is same as shipping information</label>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Pay Now</button>
                        </div>
                    </section>
                </div>
            )}

            {selectedPage === 'Appointment' && (
                <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Appointment Schedule</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4">
                            <div className="bg-green-100 text-green-800 p-2 rounded">Marvin McKinney <br /> 10AM - 11AM</div>
                        </div>
                        <div className="p-4">
                            <div className="bg-red-100 text-red-800 p-2 rounded mb-2">Dianne Russell <br /> 9AM - 10AM</div>
                        </div>
                        <div className="p-4">
                            <div className="bg-green-100 text-green-800 p-2 rounded mb-2">Jane Cooper <br /> 9AM - 10AM</div>
                        </div>
                        <div className="p-4">
                            <div className="bg-blue-100 text-blue-800 p-2 rounded mb-2">Esther Howard <br /> 9AM - 10AM</div>
                        </div>
                    </div>
                </section>
            )}

            {selectedPage === 'Dashboard' && (
                <div className="grid grid-cols-3 gap-6 mt-6">
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
            {/* Additional content for other pages (Order, Analytics, etc.) can be added similarly */}
        </main>
    );
};

export default MainContent;
