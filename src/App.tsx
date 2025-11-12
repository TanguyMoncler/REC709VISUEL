import { SimpleHeader } from "./components/SimpleHeader";
import { PhotoMasonry } from "./components/PhotoMasonry";

// URLs pointent vers public/photos/...
// On ENCODE le nom "photo (n).jpg" pour éviter les 404 (%20, etc.)
const makeUrl = (n: number) =>
  `${import.meta.env.BASE_URL}photos/${encodeURIComponent(`photo (${n}).jpg`)}`;

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
