export default function TopBar() {
  return (
    <div className="bg-brand text-[#7a2a0c] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
      <div className="max-w-[1170px] mx-auto px-5 py-3 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
        <span>Working hours: Mon-Sun 12 PM – 01 AM</span>
        <span className="flex gap-4">
          {/* {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map((s) => }
            <a key={s} href="#" className="underline hover:text-white transition-colors">{s}</a>
          ))}
        </span>
      </div>
    </div>
  )
}
