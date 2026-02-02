import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, mobile, message } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Send email using Resend
    // TODO: Once domain is verified, uncomment the line below and remove the onboarding line
    // from: 'noreply@prashanvitech.com',
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Change to noreply@prashanvitech.com after domain verification
      to: 'prashanvitech@gmail.com',
      reply_to: email, // User's email for easy replies
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #FF5722;">New Contact Form Submission</h2>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile No:</strong> ${mobile}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-left: 3px solid #FF5722;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This email was sent from the Prashanvi Tech contact form.</p>
        </div>
      `,
    });

    return res.status(200).json({
      message: 'Email sent successfully!',
      id: data.id
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Failed to send email',
      error: error.message
    });
  }
}
