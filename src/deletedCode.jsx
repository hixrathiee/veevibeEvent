<section className="relative h-3/4 flex items-center justify-center overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${sportsHero})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-sports-green/90 via-sports-white/50 to-sports-saffron/90" />
  </div>
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
      Sports Excellence
    </h1>
    <p className="text-xl md:text-2xl text-primary/80 mb-8 font-sans">
      Celebrating the spirit of sportsmanship and athletic achievement
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        variant="default"
        size="lg"
        asChild
        className="bg-sports-saffron text-primary-foreground hover:bg-sports-saffron/90"
      >
        <Link to="/booking">Plan Your Event</Link>
      </Button>
      <Button
        variant="default"
        size="lg"
        asChild
        className="bg-sports-green text-primary-foreground hover:bg-sports-green/90"
      >
        <Link to="/contact">Learn More</Link>
      </Button>
    </div>
  </div>
</section>;

// Entertainment Spectacular
{
  /* <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${entertainmentHero})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-entertainment/90 to-entertainment/50" />
  </div>
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
      Entertainment Spectacular
    </h1>
    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-sans">
      Creating unforgettable entertainment experiences that captivate audiences
    </p>
    <Button variant="entertainment" size="lg" asChild>
      <Link to="/booking">Book Entertainment</Link>
    </Button>
  </div>
</section>; */
}

// Corporate.tsx file code
{
  /* <section className="relative h-1/2 pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${corporateHero})`, height: "600px" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-corporate/90 to-corporate/50" />
  </div>
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
      Corporate Excellence
    </h1>
    <p className="text-lg md:text-2xl text-primary-foreground/90 mb-8 font-sans">
      Elevate your business presence with world-class corporate events
    </p>
    <Button variant="corporate" size="lg" asChild>
      <Link to="/booking">Plan Your Event</Link>
    </Button>
  </div>
</section>; */
}

//  {/* Benefits */}
// <section className="py-20 px-4 bg-muted">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-foreground mb-4">
//               Why Choose Us
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {[
//               {
//                 title: "Strategic Planning",
//                 description:
//                   "Align events with your business objectives for maximum impact",
//               },
//               {
//                 title: "Cutting-Edge Technology",
//                 description:
//                   "State-of-the-art AV, streaming, and presentation equipment",
//               },
//               {
//                 title: "Professional Network",
//                 description:
//                   "Access to top-tier venues, vendors, and industry experts",
//               },
//               {
//                 title: "Measurable Results",
//                 description: "Comprehensive analytics and post-event reporting",
//               },
//             ].map((benefit, index) => (
//               // <div key={index} className="flex gap-4">
//               //   <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-corporate flex items-center justify-center text-primary-foreground font-bold">
//               //     ✓
//               //   </div>
//               //   <div>
//               //     <h3 className="text-xl font-bold text-foreground mb-2">
//               //       {benefit.title}
//               //     </h3>
//               //     <p className="text-muted-foreground font-sans">
//               //       {benefit.description}
//               //     </p>
//               //   </div>
//               // </div>
//               <div
//                 key={index}
//                 className="group relative flex gap-4 items-start bg-white rounded-2xl shadow-lg p-6 border border-transparent
//              bg-[length:200%_200%] bg-gradient-to-r from-[#335597] via-[#3b60a5] to-[#929AAA]
//              transition-all duration-700 ease-out hover:scale-105 hover:animate-gradientMove hover:border-[#FFD700]/50"
//               >
//                 {/* Inner white layer to mask gradient background */}
//                 <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

//                 {/* Icon Circle */}
//                 <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-lg  gradient-corporate flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
//                   ✓
//                 </div>

//                 {/* Text Content */}
//                 <div className="relative z-10">
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-muted-foreground font-sans">
//                     {benefit.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
