import Image from "next/image";
import Link from "next/link";

import { galleryImages } from "@/data/gallery";

export function Gallery() {
  return (
    <section className="gallery section-pad on-dark" id="gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Rooms &amp; Views</p>
          <h2>A closer look at where you&apos;ll stay.</h2>
          <p>Thoughtful interiors, peaceful views, and space to settle in.</p>
        </div>

        <div className="gallery-grid home-gallery-grid">
          {galleryImages.slice(0, 4).map((image) => (
            <figure className="g-item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 50vw, (max-width: 980px) 33vw, 25vw"
              />
            </figure>
          ))}
        </div>

        <div className="gallery-more-wrap">
          <Link className="gallery-more" href="/gallery">
            More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
