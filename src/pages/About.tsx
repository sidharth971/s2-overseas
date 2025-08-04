import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center sm:text-left">About Us</h1>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Thrayana PRIVATE LIMITED is a leading exporter of high-quality products, 
                specializing in agricultural commodities and traditional handicrafts. 
                We are committed to delivering excellence in every shipment.
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                With our ISO 22000:2025 certification, we maintain the highest standards 
                of food safety and quality management throughout our supply chain.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Our mission is to bridge the gap between Indian producers and global markets, 
                ensuring fair trade practices and sustainable business relationships.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 