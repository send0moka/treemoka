import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "Hello", px: "px-7" },
    { href: "/manifesto", label: "Manifesto", px: "px-4" },
  ]
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#111113] rounded-full p-1 flex items-center z-10 shadow-lg text-sm tracking-tight">
      {links.map(({ href, label, px }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={
              `${px} py-1 rounded-full transition-colors ` +
              (isActive
                ? "bg-[#212225] text-white"
                : "text-[#545455] hover:text-[#959698] font-semibold")
            }
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
