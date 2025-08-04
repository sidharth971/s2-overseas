import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Banana Powder",
      category: "processed-foods",
      mainImage: "/assets/products/Banana-Powder.webp",
      gallery: [
        "/assets/products/banana-powder-process.jpg",
        "/assets/products/banana-powder-packaging.jpg",
        "/assets/products/banana-powder-application.jpg"
      ],
      description: "Premium dehydrated banana powder made from carefully selected ripe bananas, perfect for food processing and nutritional supplements. Our banana powder is produced using state-of-the-art dehydration technology that preserves the natural nutrients and flavor of fresh bananas.",
      longDescription: "Our premium banana powder is sourced from the finest Cavendish bananas grown in the fertile regions of Kerala. The bananas are carefully selected at peak ripeness to ensure maximum nutritional value and natural sweetness. The dehydration process removes moisture while preserving essential nutrients, making it an ideal ingredient for various food applications.",
      details: {
        origin: "Kerala, India",
        processing: "Dehydrated and finely ground",
        packaging: "25kg bags, 1kg retail packs",
        certifications: ["ISO 22000:2025", "HACCP", "FSSAI", "Organic"],
        applications: ["Bakery products", "Smoothies", "Nutritional supplements", "Baby food", "Protein shakes", "Ice cream"],
        specifications: {
          moisture: "< 5%",
          protein: "3.5-4.5%",
          fiber: "8-12%",
          shelfLife: "24 months",
          color: "Light cream to golden yellow",
          taste: "Natural banana flavor",
          solubility: "Excellent in water and milk"
        },
        nutritionalInfo: {
          calories: "350 kcal/100g",
          carbohydrates: "85g/100g",
          protein: "3.5g/100g",
          fiber: "8g/100g",
          potassium: "1200mg/100g",
          vitaminC: "15mg/100g"
        }
      },
      features: [
        "Rich in potassium and natural sugars",
        "No artificial preservatives",
        "Consistent quality and taste",
        "Suitable for gluten-free products",
        "High solubility for easy mixing",
        "Natural source of energy"
      ],
      benefits: [
        "Natural energy boost",
        "Supports digestive health",
        "Rich in essential minerals",
        "Ideal for sports nutrition",
        "Safe for children and elderly"
      ]
    },
    {
      id: 8,
      name: "Moringa Powder",
      category: "processed-foods",
      mainImage: "/assets/products/moringa-leaves-harvest.jpg",
      gallery: [
        "/assets/products/moringa-leaves-harvest.jpg",
        "/assets/products/moringa-powder-packaging.jpg",
        "/assets/products/moringa-powder-application.jpg"
      ],
      description: "Nutrient-rich moringa powder made from shade-dried moringa leaves, perfect for health supplements and food fortification.",
      longDescription: "Our moringa powder is made from carefully selected moringa leaves, shade-dried to preserve nutrients and finely ground to a vibrant green powder. Moringa is known as the 'miracle tree' for its exceptional nutritional profile, including high levels of protein, vitamins, minerals, and antioxidants. It is ideal for boosting immunity, supporting energy, and fortifying foods and beverages.",
      details: {
        origin: "Tamil Nadu, India",
        processing: "Shade-dried and finely ground",
        packaging: "10kg, 25kg bags, 500g retail packs",
        certifications: ["ISO 22000:2025", "Organic", "FSSAI"],
        applications: ["Smoothies", "Supplements", "Baking", "Soups", "Juices", "Energy bars"],
        specifications: {
          moisture: "< 7%",
          protein: "20-28%",
          fiber: "18-22%",
          shelfLife: "18 months",
          color: "Vibrant green",
          taste: "Earthy, slightly bitter",
          solubility: "Good in water and juices"
        },
        nutritionalInfo: {
          calories: "320 kcal/100g",
          protein: "25g/100g",
          fiber: "20g/100g",
          vitaminA: "6780 IU/100g",
          vitaminC: "17mg/100g",
          calcium: "185mg/100g",
          iron: "4mg/100g"
        }
      },
      features: [
        "High in vitamins and minerals",
        "Rich in antioxidants",
        "Supports immune health",
        "Natural energy booster",
        "Vibrant green color",
        "No additives or preservatives"
      ],
      benefits: [
        "Boosts immunity",
        "Supports energy and vitality",
        "Promotes healthy skin",
        "Aids digestion",
        "Rich in plant protein"
      ]
    },
    {
      id: 2,
      name: "Turmeric Powder",
      category: "spices",
      mainImage: "/assets/products/turmeric-applications.jpg",
      gallery: [
        "/assets/products/turmeric-rhizomes.jpg",
        "/assets/products/turmeric-processing.jpg",
        "/assets/products/turmeric-applications.jpg"
      ],
      description: "Premium organic turmeric powder with high curcumin content, sourced from the finest rhizomes of Karnataka and Tamil Nadu. Our turmeric is known for its vibrant color and potent medicinal properties.",
      longDescription: "Our premium turmeric powder is sourced from the finest rhizomes grown in the fertile soils of Karnataka and Tamil Nadu. The turmeric is carefully harvested, sun-dried, and ground to preserve its natural curcumin content and vibrant golden color. This traditional spice has been used in Ayurvedic medicine for centuries.",
      details: {
        origin: "Karnataka & Tamil Nadu, India",
        processing: "Sun-dried and ground",
        packaging: "50kg bags, 5kg bulk packs",
        certifications: ["ISO 22000:2025", "Organic", "FSSAI", "USDA Organic"],
        applications: ["Cooking", "Traditional medicine", "Cosmetics", "Food coloring", "Supplements", "Skincare"],
        specifications: {
          curcumin: "3-5%",
          moisture: "< 12%",
          ash: "< 7%",
          shelfLife: "36 months",
          color: "Vibrant golden yellow",
          aroma: "Warm and earthy",
          particleSize: "Fine powder (80-100 mesh)"
        },
        nutritionalInfo: {
          calories: "354 kcal/100g",
          protein: "8g/100g",
          carbohydrates: "65g/100g",
          fiber: "21g/100g",
          curcumin: "3-5%",
          essentialOils: "3-5%"
        }
      },
      features: [
        "High curcumin content",
        "Natural anti-inflammatory properties",
        "Vibrant golden color",
        "Traditional Ayurvedic benefits",
        "Organic and pure",
        "No artificial additives"
      ],
      benefits: [
        "Anti-inflammatory properties",
        "Natural antioxidant",
        "Supports joint health",
        "Promotes healthy skin",
        "Traditional healing properties"
      ]
    },
    {
      id: 3,
      name: "Guntur Red Chilli Powder",
      category: "spices",
      mainImage: "/assets/products/chilli-powder-applications.jpg",
      gallery: [
        "/assets/products/guntur-chilli.jpg",
        "/assets/products/chilli-processing.jpg",
        "/assets/products/chilli-powder-applications.jpg"
      ],
      description: "Fiery red chilli powder from the famous Guntur region, known for its intense heat and rich flavor profile. These chillies are carefully selected and processed to maintain their authentic South Indian taste.",
      longDescription: "Guntur chillies are renowned worldwide for their exceptional heat and flavor. Grown in the fertile soils of Andhra Pradesh, these chillies are sun-dried and ground to create a powder that captures the authentic taste of South Indian cuisine. The intense heat and rich color make it perfect for traditional and modern cooking.",
      details: {
        origin: "Guntur, Andhra Pradesh, India",
        processing: "Sun-dried and ground",
        packaging: "25kg bags, 1kg retail packs",
        certifications: ["ISO 22000:2025", "FSSAI", "Spice Board", "GI Tag"],
        applications: ["Cooking", "Pickles", "Sauces", "Seasoning", "Marinades", "Traditional dishes"],
        specifications: {
          heatLevel: "High (50,000-100,000 SHU)",
          moisture: "< 10%",
          color: "Deep red",
          shelfLife: "24 months",
          aroma: "Intense and pungent",
          particleSize: "Fine powder (60-80 mesh)"
        },
        nutritionalInfo: {
          calories: "282 kcal/100g",
          protein: "12g/100g",
          carbohydrates: "49g/100g",
          fiber: "27g/100g",
          capsaicin: "0.1-1%",
          vitaminC: "144mg/100g"
        }
      },
      features: [
        "Intense heat and flavor",
        "Rich in capsaicin",
        "Natural preservative properties",
        "Authentic South Indian taste",
        "Consistent quality",
        "Traditional processing methods"
      ],
      benefits: [
        "Metabolism booster",
        "Rich in antioxidants",
        "Natural pain relief",
        "Supports weight management",
        "Traditional medicinal properties"
      ]
    },
    {
      id: 4,
      name: "Cumin Seeds",
      category: "spices",
      mainImage: "/assets/products/Cumin-Seed.webp",
      gallery: [
        "/assets/products/cumin-farm.jpg",
        "/assets/products/cumin-processing.jpg",
        "/assets/products/cumin-applications.jpg"
      ],
      description: "Premium quality cumin seeds with intense aroma and flavor, perfect for both whole and ground applications. Our cumin seeds are carefully selected and cleaned to ensure the highest quality.",
      longDescription: "Our premium cumin seeds are sourced from the arid regions of Rajasthan and Gujarat, where the climate and soil conditions create the perfect environment for growing high-quality cumin. The seeds are carefully harvested, cleaned, and graded to ensure consistent quality and flavor.",
      details: {
        origin: "Rajasthan & Gujarat, India",
        processing: "Cleaned and graded",
        packaging: "50kg bags, 5kg bulk packs",
        certifications: ["ISO 22000:2025", "FSSAI", "Spice Board", "Organic"],
        applications: ["Cooking", "Pickles", "Bread", "Seasoning", "Traditional medicine", "Essential oils"],
        specifications: {
          moisture: "< 8%",
          foreignMatter: "< 1%",
          oilContent: "2-4%",
          shelfLife: "36 months",
          color: "Light brown to dark brown",
          aroma: "Warm and earthy",
          size: "Uniform size and shape"
        },
        nutritionalInfo: {
          calories: "375 kcal/100g",
          protein: "18g/100g",
          carbohydrates: "44g/100g",
          fiber: "11g/100g",
          essentialOils: "2-4%",
          iron: "66mg/100g"
        }
      },
      features: [
        "Intense aromatic flavor",
        "High essential oil content",
        "Traditional digestive benefits",
        "Versatile culinary applications",
        "Consistent quality",
        "Natural and pure"
      ],
      benefits: [
        "Digestive health support",
        "Rich in iron",
        "Antioxidant properties",
        "Traditional medicinal benefits",
        "Culinary versatility"
      ]
    },
    {
      id: 5,
      name: "Banana Fiber",
      category: "textiles",
      mainImage: "/assets/products/Banana-Fiber.webp",
      gallery: [
        "/assets/products/banana-fiber-extraction.jpg",
        "/assets/products/banana-fiber-products.jpg",
        "/assets/products/banana-fiber-sustainable.jpg"
      ],
      description: "Sustainable banana fiber extracted from banana plant stems, perfect for eco-friendly textiles and handicrafts. Our banana fiber is processed using traditional methods that support rural artisans.",
      longDescription: "Banana fiber is extracted from the stems of banana plants, a byproduct of banana cultivation. This sustainable fiber is processed using traditional methods that have been passed down through generations. The fiber is strong, durable, and completely biodegradable, making it an excellent eco-friendly alternative to synthetic fibers.",
      details: {
        origin: "Kerala & Karnataka, India",
        processing: "Extracted and processed",
        packaging: "Bales of 100kg",
        certifications: ["Organic", "Fair Trade", "Eco-friendly", "Handmade"],
        applications: ["Textiles", "Handicrafts", "Paper", "Ropes", "Bags", "Home decor"],
        specifications: {
          fiberLength: "2-4 meters",
          tensileStrength: "High",
          color: "Natural cream to brown",
          sustainability: "100% biodegradable",
          texture: "Smooth and soft",
          durability: "Long-lasting"
        },
        environmentalInfo: {
          biodegradability: "100%",
          carbonFootprint: "Minimal",
          waterUsage: "Low",
          pesticideFree: "Yes",
          renewable: "Yes"
        }
      },
      features: [
        "100% biodegradable",
        "Sustainable alternative to synthetic fibers",
        "Strong and durable",
        "Supports rural artisans",
        "Natural and eco-friendly",
        "Traditional processing methods"
      ],
      benefits: [
        "Environmental sustainability",
        "Supports local communities",
        "Reduces plastic waste",
        "Natural and hypoallergenic",
        "Promotes traditional crafts"
      ]
    },
    {
      id: 6,
      name: "Black Tea Powder",
      category: "beverages",
      mainImage: "/assets/products/Black-Tea-Powder.webp",
      gallery: [
        "/assets/products/tea-gardens.jpg",
        "/assets/products/tea-processing.jpg",
        "/assets/products/tea-applications.jpg"
      ],
      description: "Premium black tea powder from Assam and Darjeeling regions, perfect for instant tea preparations and food applications. Our tea powder maintains the authentic taste of traditional Indian tea.",
      longDescription: "Our premium black tea powder is sourced from the finest tea gardens of Assam and Darjeeling, where the unique climate and soil conditions create exceptional tea leaves. The tea is carefully processed and ground to create a powder that captures the rich flavor and aroma of traditional Indian tea.",
      details: {
        origin: "Assam & Darjeeling, India",
        processing: "Fermented and ground",
        packaging: "25kg bags, 1kg retail packs",
        certifications: ["ISO 22000:2025", "FSSAI", "Tea Board", "Organic"],
        applications: ["Instant tea", "Food coloring", "Bakery", "Beverages", "Cosmetics", "Supplements"],
        specifications: {
          caffeine: "2-4%",
          theaflavins: "1-2%",
          moisture: "< 5%",
          shelfLife: "24 months",
          color: "Deep brown to black",
          aroma: "Rich and malty",
          solubility: "Excellent in hot water"
        },
        nutritionalInfo: {
          calories: "1 kcal/cup",
          caffeine: "40-60mg/cup",
          antioxidants: "High",
          theaflavins: "1-2%",
          polyphenols: "Rich source"
        }
      },
      features: [
        "Rich in antioxidants",
        "Consistent quality",
        "Versatile applications",
        "Traditional Indian tea taste",
        "High solubility",
        "Natural and pure"
      ],
      benefits: [
        "Antioxidant properties",
        "Natural energy boost",
        "Supports heart health",
        "Promotes mental alertness",
        "Traditional health benefits"
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(productId || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 sm:pt-20 lg:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <section className="py-4 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm">
              <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/products')}>
                Products
              </Button>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {product.gallery.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-2 capitalize text-xs sm:text-sm">
                    {product.category.replace('-', ' ')}
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">{product.name}</h1>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Specs */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Quick Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {Object.entries(product.details.specifications).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="bg-card p-3 rounded-lg">
                        <div className="text-xs sm:text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="font-semibold text-foreground text-sm sm:text-base">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="btn-primary w-full sm:w-auto">
                    Request Quotation
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Download Data Sheet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-8 sm:py-12 lg:py-16 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Detailed Description */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Product Details</h2>
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">{product.longDescription}</p>
                  
                  {/* Specifications Table */}
                  <div className="bg-card rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {Object.entries(product.details.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border">
                          <span className="text-xs sm:text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-medium text-xs sm:text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-card rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.details.applications.map((app, index) => (
                        <Badge key={index} variant="secondary" className="badge-animate text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-card rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.details.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="badge-animate text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6">
                {/* Product Benefits */}
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Nutritional Information */}
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Nutritional Information</h3>
                    <div className="space-y-2">
                      {Object.entries(product.details.nutritionalInfo || {}).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-1">
                          <span className="text-xs sm:text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-medium text-xs sm:text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Product Details */}
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Product Details</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs sm:text-sm text-muted-foreground">Origin:</span>
                        <div className="font-medium text-xs sm:text-sm">{product.details.origin}</div>
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm text-muted-foreground">Processing:</span>
                        <div className="font-medium text-xs sm:text-sm">{product.details.processing}</div>
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm text-muted-foreground">Packaging:</span>
                        <div className="font-medium text-xs sm:text-sm">{product.details.packaging}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 gradient-text">Ready to Order?</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Get in touch with us to discuss your requirements and receive a detailed quotation for {product.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="btn-primary w-full sm:w-auto">
                Request Quotation
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/contact')} className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails; 