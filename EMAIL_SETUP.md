# Email Setup Guide

## Setting up Resend for Contact Form

### Step 1: Create a Resend Account
1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up for a free account (3000 emails/month)

### Step 2: Verify Your Domain
1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain: `prashanvitech.com`
4. Add the DNS records shown to your domain registrar:
   - SPF Record (TXT)
   - DKIM Record (TXT)
   - DMARC Record (TXT)
5. Wait for verification (can take a few minutes to 24 hours)

### Step 3: Get Your API Key
1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Prashanvitech Contact Form")
4. Select "Sending access"
5. Copy the API key (you'll only see it once!)

### Step 4: Configure Environment Variables

#### For Local Development:
1. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
2. Add your Resend API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

#### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production, Preview, Development (select all)
4. Click "Save"
5. Redeploy your site for changes to take effect

### Step 5: Test the Contact Form
1. Run your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit the form
4. Check `prashanvitech@gmail.com` for the email

### Important Notes:
- The "from" address will be `noreply@prashanvitech.com`
- The "to" address will be `prashanvitech@gmail.com`
- Free tier includes 3000 emails/month
- After domain verification, emails won't go to spam

### Troubleshooting:
- If emails aren't sending, check Vercel logs for errors
- Verify your API key is set correctly in environment variables
- Make sure your domain is fully verified in Resend
- Check Resend dashboard logs: [https://resend.com/emails](https://resend.com/emails)
