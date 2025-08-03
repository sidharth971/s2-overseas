import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Thrayana PRIVATE LIMITED is a leading exporter of high-quality products, 
                specializing in agricultural commodities and traditional handicrafts. 
                We are committed to delivering excellence in every shipment.
              </p>
              <p className="text-muted-foreground mb-6">
                With our ISO 22000:2025 certification, we maintain the highest standards 
                of food safety and quality management throughout our supply chain.
              </p>
              <p className="text-muted-foreground">
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