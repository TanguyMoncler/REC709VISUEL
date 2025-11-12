import { SimpleHeader } from "./components/SimpleHeader";
import { PhotoMasonry } from "./components/PhotoMasonry";

const cloudinaryBase = "https://res.cloudinary.com/djq2gnnfp/image/upload/v1762970879/";

const photos = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  url: `${cloudinaryBase}photo_${i + 1}.jpg`,
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
