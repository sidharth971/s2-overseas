import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    "https://aquaconnectexim.com/wp-content/uploads/2024/12/B2B-Spices-768x580.webp",
    "/assets/products/Gemini_Generated_Image_4b6i9r4b6i9r4b6i.png",
    "/assets/products/Kondapalli-Toys.webp",
    "/assets/products/Banana-Fiber.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 opacity-10">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-1.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 opacity-10 transform rotate-12">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-20 w-24 h-24 opacity-10">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-2.png" alt="spice decoration" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
              Indian Spices, Processed Food & Tea{" "}
              <span className="gradient-text">Exporter</span> Globally
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Spices are the heart of any dish, and India is a leading spices importer and exporter to global 
              markets. Due to their rich flavor and superior quality, Indian spices are a staple in kitchens 
              across the globe. Indian spice exporters connect farmers to a global market, making India a 
              dominant player in the global trade of spices importers and exporters.
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="btn-primary">
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Right Image Slideshow */}
          <div className="flex-1 relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentIndex 
                        ? "opacity-100 transform translate-x-0" 
                        : "opacity-0 transform translate-x-full"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? "bg-primary shadow-lg" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Previous/Next Buttons */}
              <button
                onClick={() => setCurrentIndex((prev) => 
                  prev === 0 ? heroImages.length - 1 : prev - 1
                )}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentIndex((prev) => 
                  (prev + 1) % heroImages.length
                )}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;