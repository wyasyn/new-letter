"use server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SendEmailArgs = {
    email: string;
};

export const sendEmail = async ({ email }: SendEmailArgs) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const info = await transporter.sendMail({
            from: `Yasin <${process.env.EMAIL_USERNAME}>`,
            to: email,
            subject: "Newsletter Subscription",
            text: "Hello, this is a test message from my practice website. No user info is saved.",
        });

        return NextResponse.json({
            status: "success",
            message: "Email sent successfully!",
            info,
        });
    } catch (error: any) {
        // Specify type of error as Error
        console.error("Error sending email:", error);
        return NextResponse.json(
            {
                status: "error",
                message: "Failed to send email",
                error: error.message, // Include error message in response
            },
            { status: 500 }
        ); // Set appropriate status code
    }
};
