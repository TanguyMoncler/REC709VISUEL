import { SimpleHeader } from "./components/SimpleHeader";
import { PhotoMasonry } from "./components/PhotoMasonry";

// Génère automatiquement les URLs vers public/photos/photo (1).jpg → photo (36).jpg
const makeUrl = (n: number) =>
  `${import.meta.env.BASE_URL}photos/photo (${n}).jpg`;

const photos = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  url: makeUrl(i + 1),
  title: "Title",
  photographer: "Nelson Charles",
}));

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EDE8D0" }}>
      <SimpleHeader />
      <PhotoMasonry initialPhotos={photos} />
    </div>
  );
}
