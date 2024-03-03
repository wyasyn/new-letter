"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function DismissBtn() {
    const router = useRouter();
    return (
        <Button
            onClick={() => {
                router.push("/");
            }}
        >
            Dismiss message
        </Button>
    );
}
