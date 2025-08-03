import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Our Certifications</h1>
            <div className="grid gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-lg px-4 py-2 rounded-full font-semibold">
                    ISO 22000:2025
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Food Safety Management</h2>
                </div>
                <p className="text-muted-foreground">
                  Our ISO 22000:2025 certification ensures that we maintain the highest standards 
                  of food safety throughout our entire supply chain, from sourcing to delivery.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Quality Assurance</h2>
                <p className="text-muted-foreground">
                  We implement rigorous quality control measures to ensure that all our products 
                  meet international standards and customer expectations.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Export Compliance</h2>
                <p className="text-muted-foreground">
                  All our export processes comply with international trade regulations and 
                  destination country requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificates; 