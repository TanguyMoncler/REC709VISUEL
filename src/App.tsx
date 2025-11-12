import { SimpleHeader } from "./components/SimpleHeader";
import { PhotoMasonry } from "./components/PhotoMasonry";

// Type facultatif (aide TS + props PhotoMasonry)
type PhotoItem = {
  id: number;
  url: string;
  title: string;
  photographer: string;
};

// 🔽 Charge automatiquement TOUTES les .jpg du dossier ./assets/
// - compatible avec les noms "photo (12).jpg" ET "photo12.jpg"
// - évite les erreurs si certaines images n'existent pas encore
const modules = import.meta.glob("./assets/*.jpg", { eager: true });

const photos: PhotoItem[] = Object.entries(modules)
  .map(([path, mod]) => {
    // Essaye d'extraire le numéro (priorité au format "photo (12).jpg", sinon "photo12.jpg")
    const match =
      path.match(/photo\s*\((\d+)\)\.jpg$/i) ||
      path.match(/photo\s*(\d+)\.jpg$/i);

    const num = match ? parseInt(match[1], 10) : 0;

    // @ts-ignore - Vite expose l’URL finale via mod.default
    const url = (mod as any).default as string;

    return {
      id: num || Date.now() + Math.floor(Math.random() * 1e6), // fallback unique si pas de numéro
      url,
      title: "Title",
      photographer: "Nelson Charles",
      // champ interne pour trier proprement
      _sort: num,
    } as PhotoItem & { _sort?: number };
  })
  // trie par numéro si disponible (photo (1) avant photo (2), etc.)
  .sort((a, b) => (a._sort || 0) - (b._sort || 0))
  // retire le champ interne
  .map(({ _sort, ...rest }) => rest);

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EDE8D0" }}>
      <SimpleHeader />
      <PhotoMasonry initialPhotos={photos} />
    </div>
  );
}
