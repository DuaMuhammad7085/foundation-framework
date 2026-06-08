import backgroundImage from "@/assets/background.png";

export function SectionBackdrop({ wash = "bg-white/30" }: { wash?: string }) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.48]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        aria-hidden
      />
      <div className={`pointer-events-none absolute inset-0 ${wash}`} aria-hidden />
    </>
  );
}
