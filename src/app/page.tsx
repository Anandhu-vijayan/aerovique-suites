import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { FindYourStay } from "@/components/home/find-your-stay";
import { Footer } from "@/components/home/footer";
import { Gallery } from "@/components/home/gallery";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <FindYourStay />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
