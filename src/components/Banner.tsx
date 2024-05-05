import Image from "next/image"

export default function Banner() {
    return (
        <div className="flex flex-col sm:flex-row md:flex-row justify-center gap-2 bg-gradient-to-b from-white via-green-200 to-white">
            <div className="w-full sm:w-1/3">
                <Image src={"/banner.png"} alt="Descripción de la imagen" width={600} height={600} />
            </div>
            <div className="w-full sm:w-1/3 flex justify-center items-center text-center  rounded-md">
                <h2 className="text-2xl font-bold">We are an IT company that dedicates the maximum effort to our work. We have our base in Tucum&aacute;n, Argentina</h2>
            </div>
        </div>
    )
}