import Info from "@/components/Info";
import Right from "@/components/Right";

export default function Home() {
    return (
        <main className=" h-screen flex items-start md:items-center justify-center ">
            <div className=" flex flex-col gap-[2rem] md:gap-[5rem] md:flex-row-reverse md:items-center bg-background md:p-6 rounded-2xl max-w-4xl shadow-md ">
                <Right />
                <Info />
            </div>
        </main>
    );
}
