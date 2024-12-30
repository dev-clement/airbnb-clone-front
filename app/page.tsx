import Catgories from "./components/Catgories";
import PropertyList from "./components/properties/PropertyList";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-[1500px] mx-auto px-6">
        <Catgories />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-col-5 gap-6">
          <PropertyList />
        </div>
      </main>
    </div>
  )
}
