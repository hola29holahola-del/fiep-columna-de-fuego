import React, { useRef } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  url: string;
  type: "image" | "video";
}

interface HitosGalleryProps {
  imagen?: string;
  mediaList?: MediaItem[];
  onImageClick: (url: string) => void;
  title?: string;
}

export default function HitosGallery({
  imagen,
  mediaList = [],
  onImageClick,
  title = "Galería"
}: HitosGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Combine legacy image and new mediaList, avoiding duplicates
  const allMedia: MediaItem[] = [];
  if (imagen) {
    allMedia.push({ url: imagen, type: "image" });
  }
  mediaList.forEach((item) => {
    if (!allMedia.some((m) => m.url === item.url)) {
      allMedia.push(item);
    }
  });

  if (allMedia.length === 0) return null;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const isCarousel = allMedia.length > 4;

  if (isCarousel) {
    // Horizontal carousel layout for > 4 items
    return (
      <div className="relative group/carousel mt-4 w-full" id="hitos-gallery-carousel">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">
            Galería ({allMedia.length} fotos) - Desliza para ver más
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleScroll("left")}
              className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition cursor-pointer"
              title="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition cursor-pointer"
              title="Siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container with native snap scrolling */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-3 pt-1 snap-x snap-mandatory scrollbar-thin scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
        >
          {allMedia.map((media, mIdx) => (
            <div
              key={mIdx}
              className="flex-shrink-0 w-72 sm:w-80 snap-start rounded-2xl overflow-hidden border border-slate-100 bg-slate-950 relative group/item shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (media.type === "image") {
                  onImageClick(media.url);
                }
              }}
            >
              {media.type === "image" ? (
                <div className="w-full h-48 sm:h-56 relative flex items-center justify-center">
                  <img
                    src={media.url}
                    alt={`${title} - ${mIdx + 1}`}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain group-hover/item:scale-102 transition duration-300"
                  />
                  {/* Hover magnifier badge */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover/item:bg-slate-900/25 opacity-0 group-hover/item:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-xs p-2 rounded-full shadow-md transform scale-90 group-hover/item:scale-100 transition-all duration-300">
                      <Plus className="h-4 w-4 text-slate-800" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-48 sm:h-56">
                  <video
                    src={media.url}
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Large prominent grid for <= 4 items
  return (
    <div className="space-y-2 mt-4 w-full" id="hitos-gallery-grid">
      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono block mb-1">
        Galería destacada
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {allMedia.map((media, mIdx) => {
          // Calculate grid layout dynamically based on count
          const isSingle = allMedia.length === 1;
          const gridColSpan = isSingle ? "col-span-full" : "";

          return (
            <div
              key={mIdx}
              className={`${gridColSpan} rounded-2xl overflow-hidden border border-slate-100 bg-slate-950 relative group/item shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer`}
              onClick={() => {
                if (media.type === "image") {
                  onImageClick(media.url);
                }
              }}
            >
              {media.type === "image" ? (
                <div className={`w-full ${isSingle ? "h-64 sm:h-96" : "h-48 sm:h-64"} relative flex items-center justify-center`}>
                  <img
                    src={media.url}
                    alt={`${title} - ${mIdx + 1}`}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain group-hover/item:scale-102 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover/item:bg-slate-900/25 opacity-0 group-hover/item:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-xs p-2.5 rounded-full shadow-md transform scale-90 group-hover/item:scale-100 transition-all duration-300">
                      <Plus className="h-5 w-5 text-slate-800" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-48 sm:h-64">
                  <video
                    src={media.url}
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
