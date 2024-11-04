// components/LandingPage.jsx
"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push('/')}>FashionFi</h1>
          <nav className="flex space-x-4">
            <button onClick={() => router.push('/')} className="text-gray-700">Home</button>
            <button onClick={() => router.push('/about')} className="text-gray-700">About Us</button>
            <button onClick={() => router.push('/contact')} className="text-gray-700">Contact Us</button>
            <button onClick={() => router.push('/blog')} className="text-gray-700">Blog</button>
            <button onClick={() => router.push('/signup')} className="bg-red-700 text-white px-4 py-2 rounded">Sign Up</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Individual custom tailoring clothes that suits you</h2>
            <p className="text-gray-700">Gain experience to ensure perfect fit, every unique style crafted with care and passion for personalized experience.</p>
            <button onClick={() => router.push('/services')} className="bg-blue-700 text-white px-4 py-2 rounded">Our Service</button>
          </div>
          <div className="md:w-1/2">
            <Image src="/hero.jpg" alt="Fashion design" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/service1.jpg" alt="Service 1" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">Lengthening Services</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/service2.jpg" alt="Service 2" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">Body Measurement</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">Restoration</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src="/work1.jpg" alt="Work 1" width={300} height={300} className="rounded-lg" />
            <Image src="/work2.jpg" alt="Work 2" width={300} height={300} className="rounded-lg" />
            <Image src="/work3.jpg" alt="Work 3" width={300} height={300} className="rounded-lg" />
            <Image src="/work4.jpg" alt="Work 4" width={300} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Skills</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Expertise</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Quality</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold">Samson</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold">Lukan</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold">Francis</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Blogs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/blog1.jpg" alt="Blog 1" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">Set a Fashion Trend</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/blog2.jpg" alt="Blog 2" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">What&apos;s Better Than One Dress</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/blog3.jpg" alt="Blog 3" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">False Breakage</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Footer Section */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
            <p>Call Us: +234 903 315 8802</p>
          </div>
          {/* Address and Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
            <p>Monday - Friday: 8AM - 5PM</p>
            <p>Saturday: 11AM - 4PM</p>
            <p>Sunday: Closed</p>
          </div>
          {/* Social Links */}
          <div className="space-x-4">
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
