import Image from "next/image"
import VerifiedIcon from "@/components/Verified"
import X from "@/components/X"
import IG from "@/components/IG"
import GH from "@/components/GH"
import Mail from "@/components/Mail"
import Link from "next/link"

const SOCIAL_LINKS = [
  {
    href: "https://x.com/sendomoka",
    label: "X",
    icon: X,
  },
  {
    href: "https://instagram.com/jehianth",
    label: "Instagram",
    icon: IG,
  },
  {
    href: "https://github.com/send0moka",
    label: "GitHub",
    icon: GH,
  },
  {
    href: "mailto:jehianthayata@gmail.com",
    label: "Mail",
    icon: Mail,
  },
]

export type Theme = "dark" | "light" | "system"

export interface ProfileCardProps {
  theme: Theme
  setTheme: (t: Theme) => void
  resolvedTheme?: "dark" | "light";
}

export default function ProfileCard({ theme, setTheme, resolvedTheme }: ProfileCardProps) {
  // Theme classes
  const isDark = (resolvedTheme ?? theme) === "dark";
  const sectionClass = isDark
    ? "bg-[#111113] text-white"
    : "bg-[#e0dcf2] text-black"
  const descClass = isDark ? "text-[#777b84]" : "text-[#80838d]"
  const socialClass = isDark
    ? "bg-[#202020] text-white hover:bg-[#202020]/50"
    : "bg-[#202020] text-white hover:bg-[#202020]/50"
  const footerClass = isDark
    ? "bg-[#2b2839]/50 text-[#777b84]"
    : "bg-[#d2cfe3]/50 text-[#80838d]"
  const linkActiveClass = isDark ? "text-white" : "text-black"
  const buttonBase =
    "cursor-pointer font-semibold px-2 py-1 rounded transition-colors"
  const buttonActive = isDark
    ? "text-white bg-[#212225]"
    : "text-black bg-[#f0f0f3]"
  const buttonInactive = isDark
    ? "text-[#777b84] hover:text-[#959698]"
    : "text-[#b8babc] hover:text-[#76787b]"

  return (
    <section
      className={`rounded-2xl pt-10 container max-w-sm sm:max-w-lg flex flex-col items-center z-10 shadow-lg tracking-tighter opacity-90 ${sectionClass}`}
    >
      <Link
        href="https://jehian.me"
        className="hover:filter hover:brightness-125 transition-all duration-300"
        aria-label="Personal Website"
      >
        <Image
          src="/me.png"
          alt="Card Image"
          className="size-32 rounded-full object-cover"
          width={1080}
          height={1080}
        />
      </Link>
      <article className="flex mt-4 mb-2 items-center gap-2">
        <h1 className="text-3xl font-medium">Treemoka</h1>
        <VerifiedIcon className="text-sky-400 size-6" />
      </article>
      <h1 className="text-3xl font-medium">(Jehian&apos;s Linktree)</h1>
      <p className={`${descClass} text-center max-w-xs mt-2 tracking-tight`}>
        Hidup lebih seru dengan sedikit kegilaan. Bergabunglah, karena dunia ini
        terlalu serius tanpa sedikit kegilaan.
      </p>
      <article className="my-8 flex gap-4">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`${socialClass} p-3 rounded-md duration-300`}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <Icon className="scale-125" />
          </Link>
        ))}
      </article>
      <footer
        className={`w-full rounded-b-2xl text-xs tracking-normal py-4 px-8 flex justify-between items-center ${footerClass}`}
      >
        <p>
          Crafted by{" "}
          <Link
            href="https://x.com/sendomoka"
            className={`font-semibold underline ${linkActiveClass}`}
          >
            sendomoka
          </Link>
        </p>
        <figure className="flex items-center">
          {(["dark", "system", "light"] as Theme[]).map((t, idx, arr) => (
            <span key={t} className="flex items-center">
              <button
                className={
                  buttonBase +
                  " " +
                  (theme === t ? buttonActive : buttonInactive)
                }
                aria-pressed={theme === t}
                onClick={() => setTheme(t)}
                type="button"
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
              {idx < arr.length - 1 && (
                <span className="font-light opacity-50">/</span>
              )}
            </span>
          ))}
        </figure>
      </footer>
    </section>
  )
}
