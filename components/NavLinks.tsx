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
  const activeClass =
    theme === "light" ? "bg-[#f0f0f3] text-black" : "bg-[#212225] text-white"
  const inactiveClass =
    theme === "light"
      ? "text-[#b8babc] hover:text-[#76787b] font-medium"
      : "text-[#545455] hover:text-[#959698] font-medium"

  return (
    <nav
      className={`${navClass} opacity-90 rounded-full p-1 flex items-center z-10 shadow-lg text-sm tracking-tight mb-8`}
    >
      {links.map(({ key, label, px }) => {
        const isActive = key === "manifesto" ? showManifesto : !showManifesto;
        return (
          <button
            key={key}
            type="button"
            className={
              `${px} py-1 cursor-pointer rounded-full transition-colors outline-none border-0 ` +
              (isActive ? activeClass : inactiveClass)
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
