import DismissBtn from "@/components/DismissBtn";
import Image from "next/image";

type nameProp = {
    searchParams: { query: string };
};

export default function page({ searchParams }: nameProp) {
    const email = searchParams?.query;
    return (
        <div className=" h-screen w-full p-4 flex items-center justify-center bg-secondary">
            <div className=" flex flex-col bg-background p-6 rounded-lg">
                <Image
                    src="images/icon-success.svg"
                    width={42}
                    height={42}
                    alt="success"
                />
                <h2 className=" text-4xl tracking-wide font-bold max-w-[10ch] my-6 ">
                    Thanks for subscribing!
                </h2>
                <p className=" max-w-[40ch] mb-[7rem] md:mb-8">
                    A confirmation email has been sent to{" "}
                    <span className=" font-bold ">{email}</span>. Please open it
                    and click the button inside to confirm your subscription.
                </p>
                <DismissBtn />
            </div>
        </div>
    );
}
