"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false;
    }
    return true;
}

const getErrorMessage = (error: unknown) : string=> {
    let message: string
    if(error instanceof Error) {
        return  error.message
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message);
    } else if (typeof error === 'string') {
        message = error;
    } else {
        message = 'An unknown error occurred';
    }
    return message;
}
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500) ) {
        return{ error:'Invalid sender email'
    }}
     if (!validateString(message,5000) ) {
        return{
            error: 'Invalid message'
    }}
    try{
    await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'bcopeman@yahoo.com',
        subject: 'New message from portfolio',
        replyTo: senderEmail as string,
        text: message as string, 
    });
    } catch (error: unknown) {
        
        return {error: getErrorMessage(error)}
    } 
};