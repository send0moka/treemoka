import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinksProps = {
  theme?: "dark" | "light"
}

export default function NavLinks({ theme = "dark" }: NavLinksProps) {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "Hello", px: "px-7" },
    { href: "/manifesto", label: "Manifesto", px: "px-4" },
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
      className={`${navClass} opacity-90 rounded-full p-1 flex items-center z-10 shadow-lg text-sm tracking-tight -mt-32 mb-8`}
    >
      {links.map(({ href, label, px }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={
              `${px} py-1 rounded-full transition-colors ` +
              (isActive ? activeClass : inactiveClass)
            }
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
