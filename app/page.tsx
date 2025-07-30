"use client"


import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"
import NavLinks from "@/components/NavLinks"
import ProfileCard, { Theme } from "@/components/ProfileCard"
import { useState, useEffect } from "react"



export default function Home() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");

  // Sync with system theme if "system" is selected
  useEffect(() => {
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => setResolvedTheme(mq.matches ? "dark" : "light");
      handleChange();
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative">
      <NavLinks theme={resolvedTheme} />
      <ProfileCard theme={theme} setTheme={setTheme} resolvedTheme={resolvedTheme} />
      <ShaderGradientCanvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.4&uTime=0.2&wireframe=false"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
