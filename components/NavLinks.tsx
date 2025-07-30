type NavLinksProps = {
  theme?: "dark" | "light"
  showManifesto?: boolean
  setShowManifesto?: (show: boolean) => void
}

export default function NavLinks({ theme = "dark", showManifesto, setShowManifesto }: NavLinksProps) {
  const links = [
    { key: "hello", label: "Hello", px: "px-7" },
    { key: "manifesto", label: "Manifesto", px: "px-4" },
  ]

  // Theme classes
  const navClass = theme === "light" ? "bg-[#fcfcfd]" : "bg-[#111113]"
  const activeBackgroundClass =
    theme === "light" ? "bg-[#f0f0f3]" : "bg-[#212225]"
  const activeTextClass = theme === "light" ? "text-black" : "text-white"
  const inactiveClass =
    theme === "light"
      ? "text-[#b8babc] hover:text-[#76787b] font-medium"
      : "text-[#545455] hover:text-[#959698] font-medium"

  // Determine active index and calculate transform
  const activeIndex = showManifesto ? 1 : 0
  const translateX = activeIndex === 0 ? "translate-x-0" : "translate-x-full"

  return (
    <nav
      className={`${navClass} opacity-90 rounded-full p-1 flex items-center z-10 shadow-lg text-sm tracking-tight mb-8 relative`}
    >
      {/* Animated background */}
      <div
        className={`absolute top-1 bottom-1 left-1 right-1 ${activeBackgroundClass} rounded-full transition-transform duration-300 ease-in-out ${translateX}`}
        style={{
          width: activeIndex === 0 ? '47%' : '47.5%',
        }}
      />
      
      {links.map(({ key, label, px }) => {
        const isActive = key === "manifesto" ? showManifesto : !showManifesto;
        return (
          <button
            key={key}
            type="button"
            className={
              `${px} py-1 cursor-pointer rounded-full transition-colors duration-300 outline-none border-0 relative z-10 flex-1 ` +
              (isActive ? activeTextClass : inactiveClass)
            }
            onClick={() => setShowManifesto && setShowManifesto(key === "manifesto")}
            tabIndex={0}
          >
            {label}
          </button>
        );
      })}
    </nav>
  )
}