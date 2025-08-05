import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RecruitmentSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-12 sm:py-16 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 opacity-15 transform -translate-x-3">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-1.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute top-16 right-4 sm:right-16 w-6 h-6 sm:w-10 sm:h-10 opacity-15 transform rotate-12">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-8 left-6 sm:left-24 w-6 h-6 sm:w-8 sm:h-8 opacity-15 transform rotate-45">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-3.png" alt="spice decoration" className="w-full h-full" />
        </div>
        <div className="absolute bottom-12 right-4 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 opacity-15 transform translate-x-3">
          <img src="https://aquaconnectexim.com/wp-content/uploads/2023/02/Group-2.png" alt="spice decoration" className="w-full h-full" />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
            Global Export Partner
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Join us as{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Export Partner</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            Connect with us to explore partnership opportunities in exporting premium Indian spices and eco-friendly products worldwide. 
            Let's build sustainable business relationships together!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              onClick={() => navigate('/contact')}
            >
              Join Us
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-green-300 text-green-600 hover:bg-green-50 hover:border-green-400 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto"
              onClick={() => navigate('/contact')}
            >
              Request Quotation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;