import logoImage from "../assets/f6feb716c203544177b1886b7ea9ac4e66f99f5f.png";

export function SimpleHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent py-8">
      <div className="flex justify-center">
        <img src={logoImage} alt="REC 709 VISUEL" className="h-32 w-auto" />
      </div>
    </header>
  );
}
