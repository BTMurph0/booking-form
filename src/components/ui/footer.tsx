import Spectrum from "@/components/ui/icons/spectrum-full.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center fixed bottom-0 w-full h-16">
      <Image src={Spectrum} alt="Vector Icon" />
    </footer>
  );
}
