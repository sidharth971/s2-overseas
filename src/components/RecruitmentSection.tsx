import { Button } from "@/components/ui/button";

const RecruitmentSection = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-12 h-12 opacity-15 transform -translate-x-3">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-1.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute top-16 right-16 w-10 h-10 opacity-15 transform rotate-12">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-8 left-24 w-8 h-8 opacity-15 transform rotate-45">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-12 right-8 w-12 h-12 opacity-15 transform translate-x-3">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-2.png" alt="spice decoration" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full px-8 text-center relative z-10">
        <div className="w-full max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            We're Hiring
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Join us as{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Global Sales Agent</span>
          </h2>
          
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Seeking experienced international spice sales agents for B2B (2-3 years) to expand our global business. 
            Help deliver premium-quality Indian spices worldwide!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Join Our Team
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;