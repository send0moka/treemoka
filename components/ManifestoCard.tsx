import Image from "next/image"
import Link from "next/link"

import { Alex_Brush } from "next/font/google"
const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  weight: "400",
  subsets: ["latin"],
});

export type Theme = "dark" | "light" | "system"

export interface ManifestoCardProps {
  theme: Theme
  setTheme: (t: Theme) => void
  resolvedTheme?: "dark" | "light"
}

export default function ManifestoCard({
  theme,
  setTheme,
  resolvedTheme,
}: ManifestoCardProps) {
  // Theme classes
  const isDark = (resolvedTheme ?? theme) === "dark"
  const sectionClass = isDark
    ? "bg-[#111113] text-white"
    : "bg-[#e0dcf2] text-black"
  const descClass = isDark ? "text-[#b0b4ba]" : "text-[#80838d]"
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
      <p className={`${descClass} mt-6 px-8 tracking-tight`}>
        Di ranah Twitter/X, di mana kata-kata berlarian cepat seperti kilat,
        kita berkomitmen untuk menjadi sumber tawa dan senyuman. Kita percaya
        bahwa di balik hiruk-pikuk kehidupan sehari-hari, setiap orang
        membutuhkan sedikit <b>canda</b> (dan <b>kesintingan</b>) untuk
        meringankan langkah.
      </p>
      <p className={`${descClass} mt-3 px-8 tracking-tight`}>
        Whatever your idealism, remember this one:{" "}
        <b>keep insane and stay sinting</b>.
      </p>
      <p className={`${alexBrush.className} text-4xl -skew-12 px-10 mb-10 w-full`}>Treemoka</p>
      <p className={`${descClass} mb-6 px-8 tracking-tight text-sm w-full`}>
        Admin {" "}
        <span className="text-[12px] text-[#777b84] font-base">@ Jehian&apos;s Linktree</span>.
      </p>
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
