import Image from "next/image";
import { ModeToggle } from "./modeToggle";

export default function Right() {
    return (
        <div className=" relative ">
            <Image
                className=" w-full h-full object-contain object-center md:hidden "
                src="images/illustration-sign-up-mobile.svg"
                width={800}
                height={800}
                alt="sign up"
            />
            <Image
                className=" hidden w-full h-full object-contain object-center md:block "
                src="images/illustration-sign-up-desktop.svg"
                width={800}
                height={800}
                alt="sign up"
            />
            <div className="absolute top-4 right-4">
                <ModeToggle />
            </div>
        </div>
    );
}
