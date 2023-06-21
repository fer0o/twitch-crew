
import Hero from "@/components/secciones/Hero";
import SeccionStreamers from "@/components/secciones/SeccionStreamers";

export default function Home() {
  return (
    <div className=" p-8">
      <section>
        <Hero/>
      </section>
      <section>
      <SeccionStreamers/>
      </section>
    </div>
  );
}
