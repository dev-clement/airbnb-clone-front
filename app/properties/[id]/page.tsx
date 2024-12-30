import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
                fill 
                src="/beach_1.jpg"
                alt="Beach house"
                className="object-cover w-full h-full"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 py-6 pr-6">
                <h1 className="mb-4 text-4xl">Property name</h1>

                <span className="mb-6 block text-lg text-gray-600">
                    Guest: 4 - 2 bed rooms - 1 bathroom
                </span>

                <hr />
                <div className="py-6 flex items-center space-x-4">
                    <Image
                        src="/profile_pic_1.jpg"
                        alt="User"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />

                    <p><strong>John Doe</strong> is your host !</p>
                </div>
                <hr />
                <p className="mt-6 text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the  leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset.
                </p>
            </div>

            <ReservationSidebar />
        </div>
    </main>
  )
}

export default PropertyDetailPage