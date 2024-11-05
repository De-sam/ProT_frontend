// components/LandingPage.jsx
"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Tailor from '@/public/Tailor.png';
import Lethening from '@/public/lethening.png';
import Body from '@/public/body.png';
import Restoration from '@/public/Restoration.png';
import ManInSuit from '@/public/ManInSuit.png';
import Dummy from '@/public/Dummy.png';
import Guy from '@/public/Guy.png';
import Dummy2 from '@/public/Dummy2.png';
import FashionTrend from '@/public/FashionTrend.png';
import Shopping from '@/public/Shopping.png';
import FalseBreakage from '@/public/FalseBreakage.png'

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
            <button onClick={() => router.push('/signup/step1')} className="bg-red-700 text-black px-4 py-2 rounded">Sign Up</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Individual custom tailoring clothes that suits you</h2>
            <p className="text-gray-700">Gain experience to ensure perfect fit, every unique style crafted with care and passion for personalized experience.</p>
            <button onClick={() => router.push('/services')} className="bg-blue-700 text-black px-4 py-2 rounded">Our Service</button>
          </div>
          <div className="md:w-1/2">
            <Image src={Tailor} alt="Fashion design" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src={Lethening} alt="lethening" width={300} height={200} className="rounded mb-4 w-fit" />
              <h4 className="text-lg font-semibold mt-2">Lengthening Services</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src={Body} alt="Service 2" width={300} height={200} className="rounded mb-4 w-fit" />
              <h4 className="text-lg font-semibold mt-2">Body Measurement</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src={Restoration} alt="Service 3" width={300} height={200} className="rounded mb-4 w-fit" />
              <h4 className="text-lg font-semibold mt-2">Restoration</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src={ManInSuit} alt="Work 1" width={300} height={300} className="rounded-lg" />
            <Image src={Dummy} alt="Work 2" width={300} height={300} className="rounded-lg" />
            <Image src={Guy} alt="Work 3" width={300} height={300} className="rounded-lg" />
            <Image src={Dummy2} alt="Work 4" width={300} height={300} className="rounded-lg" />
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
              <p className="text-black">FashionFi is crafted with expertise in fashion technology and user experience. 
                With seamless data management, easy measurement recording, and robust order processing capabilities, our 
                platform is designed to be intuitive and efficient for both beginners and experienced fashion professionals. 
                Built with secure payment systems and user-friendly interfaces, FashionFi ensures an effortless and reliable experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Expertise</h4>

              <p className="text-black">Our team brings deep expertise in both fashion and technology, combining insights from the 
              industry with advanced software development. We understand the unique needs of tailors and fashion designers, which is why 
              FashionFi goes beyond just order management. With features like customizable contracts and dissatisfaction management, we 
              ensure designers can maintain transparency and clients get the best value for their investment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Quality</h4>
              <p className="text-black">At FashionFi, quality is at the core of what we do. Our platform is built to provide a dependable
                 and smooth user experience with security as a top priority. We focus on delivering high-standard solutions, continuously tested 
                 for reliability and optimized for speed. FashionFi is designed to grow with your business, helping you build stronger customer 
                 relationships while ensuring data safety and operational efficiency.</p>
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
              <p className="text-black italic">&quot;FashionFi has completely transformed how I manage my business. 
                Keeping track of customer measurements, orders, and payments used to be a hassle, but now it&apos;s a
                ll organized in one place. It&apos;s made my workflow so much easier, and I can focus more on my designs. I couldn&apos;t be happier!&quot;</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold">Lekan</h4>
              <p className="text-black italic">&quot;As a designer, keeping clients satisfied is essential, 
              and FashionFi&apos;s contract adjustment feature is a game-changer. I can now make adjustments 
              without compromising on quality or losing out on my time and effort. FashionFi is a lifesaver for anyone in the fashion industry!&quot;</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold">Francis</h4>
              <p className="text-black italic">&quot;FashionFi&apos;s secure payment system and user-friendly design make it a perfect choice 
                for small studios and individual designers. My clients appreciate the professionalism it adds to my business, and I 
                love how everything is streamlined and secure. Highly recommended!&quot;
              </p>
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
              <Image src={FashionTrend} alt="Blog 1" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">Set a Fashion Trend</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src={Shopping} alt="Blog 2" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">What&apos;s Better Than One Dress</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src={FalseBreakage} alt="Blog 3" width={300} height={200} className="rounded mb-4" />
              <h4 className="text-lg font-semibold">False Breakage</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Footer Section */}
      <footer className="bg-blue-900 text-black py-10">
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
