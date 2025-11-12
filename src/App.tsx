import { SimpleHeader } from "./components/SimpleHeader";
import { PhotoMasonry } from "./components/PhotoMasonry";

import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpg";
import photo6 from "./assets/photo6.jpg";
import photo7 from "./assets/photo7.jpg";
import photo8 from "./assets/photo8.jpg";
import photo9 from "./assets/photo9.jpg";
import photo10 from "./assets/photo10.jpg";
import photo11 from "./assets/photo11.jpg";
import photo12 from "./assets/photo12.jpg";

export default function App() {
  const photos = [
    {
      id: 1,
      url: photo1,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 2,
      url: photo2,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 3,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 4,
      url: photo4,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 5,
      url: photo5,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 6,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 7,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 8,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 9,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 10,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 11,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 12,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader />
      <PhotoMasonry initialPhotos={photos} />
    </div>
  );
}
