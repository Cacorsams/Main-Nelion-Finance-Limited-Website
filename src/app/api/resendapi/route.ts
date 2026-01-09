import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the recipient for all form submissions
const ADMIN_EMAIL = 'admin@nelionfinance.com';

/**
 * Next.js API Route for Resend Email Integration
 * Handles: Contact Us inquiries and Newsletter subscriptions
 */
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message, type, contactSequence, strategicRequirement } = body;

        // 1. INPUT VALIDATION & SANITIZATION
        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
        }

        if (type === 'contact') {
            if (!name || !message) {
                return NextResponse.json({ error: 'Name and message are required for inquiries' }, { status: 400 });
            }
        }

        // 2. PREPARE EMAIL CONTENT BASED ON SUBMISSION TYPE
        let adminEmailConfig;
        let autoReplyConfig = null;

        if (type === 'newsletter') {
            // Newsletter Subscription Template
            adminEmailConfig = {
                from: 'Nelion Finance <notifications@nelionfinance.com>',
                to: ADMIN_EMAIL,
                subject: `New Newsletter Subscription: ${email}`,
                text: `A new user has subscribed to the newsletter: ${email}`,
                html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #1e3a8a;">New Newsletter Subscription</h2>
            <p>A new user has requested to join the Nelion Finance inner circle.</p>
            <p><strong>Subscriber Email:</strong> ${email}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666;">This is an automated notification from your Nelion Finance website.</p>
          </div>
        `,
            };

            autoReplyConfig = {
                from: 'Nelion Finance <newsletter@nelionfinance.com>',
                to: email,
                subject: 'Welcome to the Nelion Finance Inner Circle!',
                html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #1e3a8a;">Thank You for Subscribing!</h2>
            <p>We've successfully added you to our newsletter. You'll now receive strategic updates, market insights, and news directly from our expert team.</p>
            <p>Stay tuned for our upcoming briefings.</p>
            <br />
            <p>Best Regards,<br /><strong>Nelion Finance Team</strong></p>
          </div>
        `,
            };
        } else {
            // Default: Contact/Inquiry Template
            adminEmailConfig = {
                from: 'Nelion Finance Inquiries <inquiries@nelionfinance.com>',
                to: ADMIN_EMAIL,
                subject: subject || `New Strategic Inquiry from ${name}`,
                text: `
          Name: ${name}
          Email: ${email}
          Contact sequence: ${contactSequence || 'Not provided'}
          Strategic Requirement: ${strategicRequirement || 'General Inquiry'}
          Narrative of Inquiry: ${message}
        `,
                html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #1e3a8a;">New Strategic Inquiry Received</h2>
            <p>A new inquiry has been transmitted via the Nelion Finance website.</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; width: 200px;"><strong>Full Identity:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Contact Sequence:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${contactSequence || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Strategic Requirement:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${strategicRequirement || 'N/A'}</td>
              </tr>
            </table>
            <p><strong>Narrative of Inquiry:</strong></p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666;">Automated transmission from Nelion Finance Platform.</p>
          </div>
        `,
            };

            autoReplyConfig = {
                from: 'Nelion Finance <support@nelionfinance.com>',
                to: email,
                subject: 'Nelion Finance: Inquiry Received',
                html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #1e3a8a;">We've Received Your Inquiry</h2>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Nelion Finance. We have successfully received your inquiry regarding "<strong>${strategicRequirement || 'General Inquiry'}</strong>".</p>
            <p>Our strategic team is reviewing your requirements and will get back to you within 24-48 business hours.</p>
            <br />
            <p>Best Regards,<br /><strong>Nelion Finance Strategic Team</strong></p>
          </div>
        `,
            };
        }

        // 3. TRANSMIT EMAIL TO ADMIN
        const { data: adminData, error: adminError } = await resend.emails.send(adminEmailConfig);

        if (adminError) {
            console.error('Resend Admin Error:', adminError);
            return NextResponse.json({ error: 'Failed to transmit inquiry to admin' }, { status: 500 });
        }

        // 4. TRANSMIT AUTO-REPLY TO SENDER (Best effort)
        if (autoReplyConfig) {
            try {
                await resend.emails.send(autoReplyConfig);
            } catch (replyError) {
                console.warn('Resend Auto-reply failed:', replyError);
            }
        }

        return NextResponse.json({
            success: true,
            message: type === 'newsletter' ? 'Subscription successful' : 'Inquiry transmitted successfully',
            id: adminData?.id
        }, { status: 200 });

    } catch (error: any) {
        console.error('API Server Error:', error);
        return NextResponse.json({ error: 'An unexpected error occurred during transmission' }, { status: 500 });
    }
}
