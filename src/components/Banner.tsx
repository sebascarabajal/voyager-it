import Image from "next/image"

export default function Banner() {
    return (
        <div className="flex flex-col sm:flex-row md:flex-row justify-center gap-2">
            <div className="w-full sm:w-1/3">
                <Image src={"/image.png"} alt="Descripción de la imagen" width={600} height={600} />
            </div>
            <div className="w-full sm:w-1/3 flex justify-center items-center text-center">
                <h2 className="text-2xl sm:text-sm font-bold">We work with the best technology</h2>
            </div>
        </div>
    )
}