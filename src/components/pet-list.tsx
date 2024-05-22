import Image from "next/image";

export default function PetList() {
  return (
    <ul>
      <li className="bg-white border-b border-black/5">
        <button className="h-[70px] w-full flex items-center cursor-pointer gap-3 px-5 text-base hover:bg-[#eff1f2] focus:bg-[eff1f2] transition">
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="Pet Image"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
          <p className="font-semibold">Benjamin</p>
        </button>
      </li>
    </ul>
  );
}
