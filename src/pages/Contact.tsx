import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    product: "",
    message: "",
    userType: "",
    incoterms: "",
    shipmentType: "",
    lcType: "",
    dispatchMethod: "",
    containerType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      <Header />
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 sm:py-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 animate-in fade-in duration-1000">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                Contact Us
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto px-4">
                Get in touch with our experts for seamless import-export solutions and global trade support.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto">
            {/* Contact Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Office Address */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 animate-in slide-in-from-left duration-1000">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Office Address</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Shop No. 3, Ganesh Prestige Building,<br />
                  Near Laxmi Jewellers, Dhanakawadi,<br />
                  Pune - 411043, Maharashtra INDIA.
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 animate-in slide-in-from-bottom duration-1000 delay-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Phone Numbers</h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-gray-600">+91 9160040202</p>
                  <p className="text-sm sm:text-base text-gray-600">+91 9822422584</p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 animate-in slide-in-from-right duration-1000 delay-400 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Email Addresses</h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-gray-600">sales@s2overseas.com</p>
                  <p className="text-sm sm:text-base text-gray-600">info@s2overseas.com</p>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-left duration-1000">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Send Your Inquiry</h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                    Are you a Buyer looking to import from India? Complete the form below to send your inquiry and your requirements.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* User Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Who are you? *</label>
                      <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buyer">Buyer</SelectItem>
                          <SelectItem value="seller">Seller</SelectItem>
                          <SelectItem value="importer">Importer</SelectItem>
                          <SelectItem value="exporter">Exporter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <Input
                          type="text"
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Product and Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Product to Import *</label>
                        <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="turmeric-powder">Turmeric Powder</SelectItem>
                            <SelectItem value="banana-powder">Banana Powder</SelectItem>
                            <SelectItem value="jaggery-powder">Jaggery Powder</SelectItem>
                            <SelectItem value="onion-powder">Onion Powder</SelectItem>
                            <SelectItem value="red-chilli-powder">Red Chilli Powder</SelectItem>
                            <SelectItem value="green-chilli-powder">Green Chilli Powder</SelectItem>
                            <SelectItem value="cumin-seed">Cumin Seed</SelectItem>
                            <SelectItem value="black-tea">Black Tea</SelectItem>
                            <SelectItem value="green-tea">Green Tea</SelectItem>
                            <SelectItem value="other">Any Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select your Country *</label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="uae">United Arab Emirates</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                            <SelectItem value="france">France</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Trade Terms */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select InCoTerms</label>
                        <Select value={formData.incoterms} onValueChange={(value) => handleInputChange('incoterms', value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select InCoTerms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exw">EXW (Ex Works)</SelectItem>
                            <SelectItem value="fca">FCA (Free Carrier)</SelectItem>
                            <SelectItem value="fas">FAS (Free Alongside Ship)</SelectItem>
                            <SelectItem value="fob">FOB (Free on Board)</SelectItem>
                            <SelectItem value="cfr">CFR (Cost and Freight)</SelectItem>
                            <SelectItem value="cif">CIF (Cost, Insurance, and Freight)</SelectItem>
                            <SelectItem value="cpt">CPT (Carriage Paid To)</SelectItem>
                            <SelectItem value="cip">CIP (Carriage and Insurance Paid To)</SelectItem>
                            <SelectItem value="dap">DAP (Delivered at Place)</SelectItem>
                            <SelectItem value="dpu">DPU (Delivered at Place Unloaded)</SelectItem>
                            <SelectItem value="ddp">DDP (Delivered Duty Paid)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select the Type of Shipment</label>
                        <Select value={formData.shipmentType} onValueChange={(value) => handleInputChange('shipmentType', value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select shipment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fcl">FCL</SelectItem>
                            <SelectItem value="lcl">LCL</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        placeholder="Tell us about your requirements and specifications..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base sm:text-lg"
                    >
                      SEND INQUIRY
                    </Button>
                  </form>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-right duration-1000 delay-300">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Top Questions</h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Need Help? Find Answers to Common Questions Before Reaching Out</p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Which countries do you export to?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        We currently export to various countries, including the USA, UK, UAE, Europe, and many more. Our logistics network ensures safe and efficient delivery worldwide.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">What are your payment terms and options?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        We accept various payment methods, including Letter of Credit (LC), Advance Payment, and Bank Transfers. Specific terms can be discussed during the negotiation process.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">How long does it take to process and ship an order?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Processing and shipping times vary based on the product and destination. Typically, orders are processed within a few days, and shipping duration depends on the chosen method.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Can I track my shipment once it's dispatched?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Absolutely! Once your order is shipped, we will provide you with tracking details to monitor your shipment's progress.
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Have More Questions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 