"use client";

import Image from "next/image";

interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  platform: "airbnb" | "booking" | "agoda";
  platformIndex?: number;
}

const ROOMS: Room[] = [
  { id: 6, name: "Entire rental unit in Nedumbassery, India", description: "2 guests · 1 bedroom · 1 bed · 1 bathroom", image: "/images/room6.avif", platform: "airbnb", platformIndex: 0 },
  { id: 5, name: "Room in Nedumbassery, India", description: "1 king bed · Private attached bathroom", image: "/images/room5.avif", platform: "airbnb", platformIndex: 1 },
  { id: 1, name: "Room in hotel in Nedumbassery, India", description: "1 king bed · Private attached bathroom", image: "/images/room1.avif", platform: "airbnb", platformIndex: 2 },
  { id: 4, name: "Room in hotel in Nedumbassery, India", description: "1 king bed · Private attached bathroom", image: "/images/room4.avif", platform: "airbnb", platformIndex: 3 },
  { id: 3, name: "Room in hotel in Nedumbassery, India", description: "1 king bed · Private attached bathroom", image: "/images/room3.avif", platform: "airbnb", platformIndex: 4 },
  { id: 2, name: "Room in hotel in Nedumbassery, India", description: "1 king bed · Private attached bathroom", image: "/images/room2.avif", platform: "airbnb", platformIndex: 5 },
];

const PLATFORM_LINKS = {
  airbnb: [
    "https://www.airbnb.co.uk/rooms/1746148906511761611",
    "https://www.airbnb.co.uk/rooms/1743514995744951903",
    "https://www.airbnb.co.uk/rooms/1711584930969471882",
    "https://www.airbnb.co.uk/rooms/1714565462339309330",
    "https://www.airbnb.co.uk/rooms/1714604990312091514",
    "https://www.airbnb.co.uk/rooms/1709897146868333677",
  ],
  booking: "https://www.booking.com/Share-teqOmye",
  agoda: "https://www.agoda.com/aerovique-suites/hotel/kochi-in.html?cid=1844104",
};

const CHIPS = ["1 km from CIAL", "Room service 24/7", "Runway view"];

export function FindYourStay() {
  return (
    <>
      <section className="find-stay section-pad on-dark" id="rooms">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our suites</p>
            <h2>Choose your Runway view</h2>
          </div>

          <div className="rooms-grid" id="grid">
            {ROOMS.map((room) => (
              <a
                key={room.id}
                className="room-card"
                href={room.platform === "airbnb" ? PLATFORM_LINKS.airbnb[room.platformIndex!] : PLATFORM_LINKS[room.platform]}
                target="_blank"
                rel="noopener noreferrer"
                data-platform={room.platform}
                data-index={room.platformIndex}
              >
                <div className="room-photo">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <span className="badge">ROOM 0{room.id}</span>
                  <span className="source">{room.platform === "airbnb" ? "Airbnb" : room.platform === "booking" ? "Booking.com" : "Agoda"}</span>
                </div>
                <div className="room-body">
                  <h3>{room.name}</h3>
                  <p className="room-description">{room.description}</p>
                  <div className="chips">
                    {CHIPS.map((chip) => (
                      <i key={chip}>{chip}</i>
                    ))}
                  </div>
                  <span className="btn-check">
                    Check availability <b>→</b>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="also-available section-pad on-dark" id="also">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Also available on</p>
            <h2>Prefer another platform?</h2>
          </div>

          <div className="ota-grid">
            <a className="ota-card" href={PLATFORM_LINKS.booking} target="_blank" rel="noopener noreferrer">
              <div className="ota-image">
                <Image
                  src="/images/booking.com.jpg"
                  alt="Booking.com"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className="ota-body">
                <span className="pill booking">Booking.com</span>
                <p>Reserve your stay on Booking.com with flexible cancellation options.</p>
              </div>
            </a>

            <a className="ota-card" href={PLATFORM_LINKS.agoda} target="_blank" rel="noopener noreferrer">
              <div className="ota-image">
                <Image
                  src="/images/agoda.jpg"
                  alt="Agoda"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className="ota-body">
                <span className="pill agoda">Agoda</span>
                <p>Book on Agoda for exclusive deals and member rewards.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}