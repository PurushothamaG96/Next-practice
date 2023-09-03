import Image from "next/image"
import profile from "../../public/Images/60cd8837-b7d0-49a2-9d03-97998e964502.jpeg"

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src={profile}
                width={200}
                height={200}
                alt="Purushothama"
                priority={true}
            />
        </section>
    )
}