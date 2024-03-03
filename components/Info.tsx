import { sendEmail } from "@/app/action";
import { ProfileForm } from "./Form";
import Image from "next/image";

export default function Info() {
    const updates = [
        "Product discovery and building what matters",
        "Measuring to ensure updates are a success",
        "And much more!",
    ];
    return (
        <div className=" px-4 py-8 ">
            <div>
                <h2 className=" text-5xl font-bold tracking-wide mb-4  ">
                    Stay updated!
                </h2>
                <p className=" mb-5 ">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className=" mb-6 ">
                    {updates.map((item) => (
                        <li key={item} className=" flex gap-2 ">
                            {" "}
                            <Image
                                src="images/icon-list.svg"
                                width={14}
                                height={14}
                                alt="list icon"
                            />{" "}
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ProfileForm sendEmail={sendEmail} />
            </div>
        </div>
    );
}
