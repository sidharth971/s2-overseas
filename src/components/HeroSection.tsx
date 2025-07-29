import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    "https://aquaconnectexim.com/wp-content/uploads/2024/12/B2B-Spices-768x580.webp",
    "https://aquaconnectexim.com/wp-content/uploads/2024/09/2-6.webp",
    "/assets/products/Banana-Powder.webp",
    "/assets/products/Turmeric-Powder.webp",
    "/assets/products/Red-Chilli-Powder.webp",
    "/assets/products/Cumin-Seed.webp",
    "/assets/products/Banana-Fiber.webp",
    "/assets/products/Kondapalli-Toys.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 opacity-20">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-1.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 opacity-20 transform rotate-12">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-20 w-24 h-24 opacity-20">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-2.png" alt="spice decoration" className="w-full h-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Indian Spices, Processed Food & Tea{" "}
              <span className="text-orange-600">Exporter</span> Globally
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Spices are the heart of any dish, and India is a leading spices importer and exporter to global 
              markets. Due to their rich flavor and superior quality, Indian spices are a staple in kitchens 
              across the globe. Indian spice exporters connect farmers to a global market, making India a 
              dominant player in the global trade of spices importers and exporters.
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Right Image Slideshow */}
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
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
                        ? "bg-orange-500" 
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentIndex((prev) => 
                  (prev + 1) % heroImages.length
                )}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
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