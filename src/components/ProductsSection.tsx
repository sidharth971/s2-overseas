import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      id: 2,
      name: "Banana Powder",
      image: "/assets/products/Banana-Powder.webp",
      link: "#"
    },
    {
      id: 9,
      name: "Moringa Powder",
      image: "/assets/products/moringa-powder-packaging.jpg",
      link: "#"
    },
    {
      id: 3,
      name: "Turmeric Powder",
      image: "/assets/products/Turmeric-Powder.webp",
      link: "#"
    },
    {
      id: 5,
      name: "Guntur Red Chilli Powder",
      image: "/assets/products/Red-Chilli-Powder.webp",
      link: "#"
    },
    {
      id: 6,
      name: "Cumin Seed",
      image: "/assets/products/Cumin-Seed.webp",
      link: "#"
    },
    {
      id: 7,
      name: "Banana Fiber",
      image: "/assets/products/Banana-Fiber.webp",
      link: "#"
    },
    {
      id: 8,
      name: "Kondapalli Toys",
      image: "/assets/products/Kondapalli-Toys.webp",
      link: "#"
    }
  ];

  return (
    <section id="products-section" className="w-full min-h-screen bg-gradient-to-b from-background to-slate-50 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in duration-1000">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-shadow">
            <span className="gradient-text">Product</span> We Export
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium px-4">
            Premium quality Indian spices, processed foods, and traditional handicrafts for global markets
          </p>
        </div>

        {/* Products Container */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="group text-center animate-in fade-in duration-1000 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors px-2">
                  <a href={product.link} className="hover:underline font-medium">
                    {product.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center animate-in fade-in duration-1000 delay-1000">
            <Button 
              size="lg"
              className="btn-primary"
              onClick={() => window.location.href = '/products'}
            >
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;