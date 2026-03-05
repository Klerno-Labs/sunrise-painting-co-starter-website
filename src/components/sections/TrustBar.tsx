export function TrustBar() {
  const partners = [
    { name: "BBB", rating: "A+ Rating" },
    { name: "Sherwin Williams", rating: "Preferred" },
    { name: "PPA", rating: "Member" },
  ];

  return (
    <div className="bg-white border-y border-border-light py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-widest mb-6">
          Trusted Partners & Certifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-2 group">
              <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                 {/* Placeholder Logo Circle */}
                 <span className="font-bold text-xs text-gray-500 group-hover:text-primary">{partner.name[0]}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-text-heading text-sm">{partner.name}</span>
                <span className="text-xs text-text-muted">{partner.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}