import Image from "next/image"

const Catgories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-12-x">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src="/icn_category_view.jpg"
                alt="Category - view"
                width={20}
                height={20}
            />
            <span className="text-xs">Amazing views</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src="/icn_category_view.jpg"
                alt="Category - view"
                width={20}
                height={20}
            />
            <span className="text-xs">Treehouses</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src="/icn_category_view.jpg"
                alt="Category - view"
                width={20}
                height={20}
            />
            <span className="text-xs">Cabins</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src="/icn_category_view.jpg"
                alt="Category - view"
                width={20}
                height={20}
            />
            <span className="text-xs">Mansions</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src="/icn_category_view.jpg"
                alt="Category - view"
                width={20}
                height={20}
            />
            <span className="text-xs">Domes</span>
        </div>
    </div>
  )
}

export default Catgories