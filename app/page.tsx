'use client';
import { useEffect, useState } from 'react';
import RightPhoto from '../app/components/rightphoto';
import LeftPhoto from '../app/components/leftphoto';
import LogoParticles from './components/LogoParticles';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkIfMobile();
  }, []);

  return (
    <>
    <div className="relative">
      {/* Main Container */}
      <div className='z-6'>
        <HeroSection />
      </div>
        {/* LogoParticles Below */}
        <div className="absolute inset-0 h-10 z-5">
          <LogoParticles />
        </div>
        {/* Additional Content */}
        <div className='z-20'>
          <div className=" z-45 pb-6">
            <RightPhoto
              title="Custom Software Solutions for Your Business"
              description="Explore Veloxiti’s custom software solutions designed to enhance your business operations. From tailored customer relationship management to bespoke financial reporting tools, our software is built to integrate seamlessly and automate your workflows efficiently."
              buttonText="Learn More"
              buttonLink="/Software"
              imageSrc="/VELOXITI_V.png"
              imageAlt="Custom Software Platform"
              imageWidth={350}
              imageHeight={100}
            />
          </div>
        </div>
        <div className="z-45 pb-6">
          <LeftPhoto
            title="Connect and Grow with Our Networking Events"
            description="Join Veloxiti’s exclusive networking events designed to foster connections and expand your professional circle. Experience engaging discussions, collaborative sessions, and the opportunity to meet industry leaders, all tailored to enhance your business and personal growth."
            buttonText="Get Started"
            buttonLink="/Networking"
            imageSrc="/networking_small.jpg"
            imageAlt="Networking Events"
            imageWidth={500}
            imageHeight={300}
          />
        </div>
        <div className="z-45 pb-6">
          <RightPhoto
            title="Build Strategic Partnerships with Our Platform"
            description="Join forces with us and leverage our partnership opportunities to expand your reach and enhance your business capabilities. Our platform facilitates seamless collaboration and integration, empowering you and your partners to innovate and grow together."
            buttonText="Partner with Us"
            buttonLink="/Partners"
            imageSrc="/partners_small.jpg"
            imageAlt="Strategic Partnerships"
            imageWidth={500}
            imageHeight={300}
          />
        </div>
      </div>
      <div className='mt-6'>
        <h2 className="text-4xl font-light mb-8 text-center text-white">Contact Us</h2>
        <ContactForm />
      </div>
    </>
  );
}
