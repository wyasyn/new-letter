"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
    email: z.string().email(),
});

export function ProfileForm({ sendEmail }: any) {
    const [pending, setPending] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setPending(true);
            await sendEmail(values);
            toast({
                description: "Email sent successfully",
            });
        } catch (error) {
            console.log(error);
        } finally {
            setPending(false);
            router.push(`success?query=${values.email}`);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex flex-col"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <div className=" flex items-center justify-between ">
                                <FormLabel className="font-bold">
                                    Email address
                                </FormLabel>
                                <FormMessage />
                            </div>

                            <FormControl>
                                <Input
                                    placeholder="email@company.com"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button disabled={pending} size="sm" type="submit">
                    {pending ? (
                        <LoaderIcon className=" animate-spin " />
                    ) : (
                        "Subscribe to monthly newsletter"
                    )}
                </Button>
            </form>
        </Form>
    );
}
