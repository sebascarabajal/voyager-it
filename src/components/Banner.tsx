import Image from "next/image"
import Link from "next/link"

export default function Banner() {
    return (
        <section className="min-h-screen flex justify-center items-center ">
            <Image src={'/bannernew.png'} width={600} height={600} alt='mockup-demo' className="" />
        </section>
    )
}