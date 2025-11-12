import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";
import Masonry from "react-responsive-masonry";
import { motion } from "motion/react";

interface Photo {
  id: number;
  url: string;
  title: string;
  photographer: string;
}

interface PhotoMasonryProps {
  initialPhotos: Photo[];
}

export function PhotoMasonry({ initialPhotos }: PhotoMasonryProps) {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500
      ) {
        setVisibleCount((prev) => Math.min(prev + 6, photos.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [photos.length]);

  const visiblePhotos = photos.slice(0, visibleCount);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Masonry columnsCount={3} gutter="16px" className="masonry-grid">
          {visiblePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="cursor-pointer overflow-hidden rounded-lg group relative"
              onClick={() => setSelectedPhoto(photo)}
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <div className="text-white">
                  <div className="text-sm">{photo.photographer}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {visibleCount < photos.length && (
          <div className="text-center mt-8 text-gray-500">
            Faites défiler pour voir plus...
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Fermer"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
            <div className="text-white text-center mt-6">
              <h3 className="mb-2">{selectedPhoto.title}</h3>
              <p className="text-gray-300">Par {selectedPhoto.photographer}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
