import { Button } from "@/components/ui/button";

const RecruitmentSection = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-orange-100 to-blue-100 overflow-hidden flex items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 opacity-20 transform -translate-x-5">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-1.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute top-20 right-20 w-12 h-12 opacity-20 transform rotate-12">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 left-32 w-14 h-14 opacity-20 transform rotate-45">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-10 w-18 h-18 opacity-20 transform translate-x-5">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-2.png" alt="spice decoration" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl lg:text-4xl font-bold">
            We are expanding our team globally Join us as{" "}
            <span className="text-orange-600">Global Sales Agent</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are seeking experienced international spice sales agents for B2B (2-3 years) to help expand 
            our global business. Join us in delivering premium-quality, sustainably sourced Indian spices, 
            processed food & tea powders worldwide and driving growth in the global market!
          </p>

          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;