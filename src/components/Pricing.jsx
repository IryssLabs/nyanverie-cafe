export default function Pricing() {
  const tickets = [
    { name: "Regular", price: "80k", desc: ["1 pack food & drink", "Sesi random maid", "Photocard"] },
    { name: "VIP", price: "100k", desc: ["1 pack food & drink", "Sesi pilih maid", "Photocard"] },
    { name: "VVIP", price: "200k", desc: ["1 pack food & drink", "Sesi pilih maid", "Photocard", "Cheki"], highlight: true },
    { name: "Private", price: "280k", desc: ["2 pack meal & drink", "1 pack snack", "Sesi personal maid", "Photocard", "Cheki", "Gift"] },
  ];

  return (
    <section id="pricing" className="py-24 px-8 bg-white font-body">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] font-medium tracking-[0.35em] uppercase text-nyan-purple mb-4">
          Admission & Tickets
        </p>
        <h2 className="text-center font-display text-5xl font-black text-nyan-dark mb-16 leading-tight">
          Choose Your <em className="text-nyan-pink italic">Experience</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10 items-end">
          {tickets.map((t, i) => (
            <div key={i} className={`rounded-[28px] p-8 border transition-all duration-300 hover:-translate-y-1 relative ${t.highlight ? "bg-nyan-dark text-white border-nyan-dark -translate-y-3 shadow-2xl" : "bg-white border-[#ede8f5] hover:shadow-xl"}`}>
              {t.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-nyan-pink text-white text-[9px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                  ★ Best Value
                </div>
              )}
              <span className={`text-[9px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-5 inline-block ${t.highlight ? "bg-white/10 text-nyan-pink" : "bg-[#f4effe] text-[#9b72b8]"}`}>
                {t.name}
              </span>
              <p className={`font-display text-2xl font-bold mb-1 ${t.highlight ? "text-white" : "text-nyan-dark"}`}>{t.name}</p>
              <p className="font-display text-4xl font-black text-nyan-pink leading-none mb-6">{t.price}</p>
              <div className={`h-px mb-5 ${t.highlight ? "bg-white/10" : "bg-[#ede8f5]"}`} />
              <ul className="space-y-2">
                {t.desc.map((perk, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm ${t.highlight ? "text-white/65" : "text-gray-500"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-nyan-pink shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border border-[#ede8f5] rounded-[28px] p-9 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-[9px] font-medium tracking-[0.3em] uppercase text-nyan-purple mb-1">Add-on Session</p>
            <h3 className="font-display text-3xl font-bold text-nyan-dark">Open Cheki</h3>
            <p className="text-sm text-gray-400 italic mt-1">20.20 – 22.00 WIB · Solo / 2 Shot</p>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-center">
              <span className="block text-[9px] font-medium tracking-[0.25em] uppercase text-nyan-purple mb-1">Presale</span>
              <span className="font-display text-3xl font-black text-nyan-dark">30k</span>
            </div>
            <div className="w-px h-12 bg-[#ede8f5]" />
            <div className="text-center">
              <span className="block text-[9px] font-medium tracking-[0.25em] uppercase text-nyan-purple mb-1">On The Spot</span>
              <span className="font-display text-3xl font-black text-nyan-dark">35k</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}