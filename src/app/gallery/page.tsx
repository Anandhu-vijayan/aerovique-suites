import Image from "next/image";

import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { galleryImages } from "@/data/gallery";

export const metadata = {
  title: "Gallery | Aerovique Suites",
  description: "Explore the rooms, balcony, lounge, and exterior of Aerovique Suites.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="gallery-page">
        <div className="container">
          <div className="gallery-page-head">
            <p className="eyebrow">Aerovique Suites</p>
            <h1>Our complete gallery.</h1>
            <p>Explore every room, shared space, view, and detail.</p>
          </div>

          <div className="gallery-page-grid">
            {galleryImages.map((image) => (
              <figure className="gallery-page-card" key={image.src}>
                <Image
                  className="gallery-full-image"
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
