# EmailJS Quick Setup for Thrayana Contact Form

## 🚨 Current Issue
The contact form is failing because EmailJS credentials are not configured. You need to replace placeholder values with actual EmailJS credentials.

## ⚡ Quick Setup (15 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create account with `sales@thrayana.com`
3. Verify your email

### Step 2: Add Email Service  
1. In EmailJS dashboard → **"Email Services"** → **"Add New Service"**
2. Select **"Other"** (for custom SMTP)
3. Fill in these details:
   - **Service Name**: `Thrayana Hostinger`
   - **Host**: `smtp.hostinger.com`
   - **Port**: `465`
   - **Username**: `sales@thrayana.com`
   - **Password**: Your email password
   - **Secure**: ✅ Enable SSL/TLS
4. Click **"Create Service"**
5. **COPY YOUR SERVICE ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** → **"Create New Template"**
2. **Template Name**: `Thrayana Inquiry`
3. **Subject**: `New Inquiry from {{from_name}} - {{product}}`
4. **Content**: Copy this HTML template:

```html
<h2>New Inquiry from Thrayana Website</h2>

<h3>Customer Details:</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Country:</strong> {{country}}</p>
<p><strong>User Type:</strong> {{user_type}}</p>

<h3>Product & Requirements:</h3>
<p><strong>Product:</strong> {{product}}</p>
<p><strong>InCoTerms:</strong> {{incoterms}}</p>
<p><strong>Shipment Type:</strong> {{shipment_type}}</p>

<h3>Message:</h3>
<div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 15px 0;">
{{message}}
</div>

<hr>
<p><small>Submitted on: {{submission_date}}</small></p>
```

5. Click **"Save"**
6. **COPY YOUR TEMPLATE ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"API Keys"**
2. **COPY YOUR PUBLIC KEY** (e.g., `npQR-abc123xyz`)

### Step 5: Update Contact Form
Replace these lines in `src/pages/Contact.tsx` (around line 68-70):

```typescript
const SERVICE_ID = 'service_abc123'; // Replace with YOUR actual service ID
const TEMPLATE_ID = 'template_xyz789'; // Replace with YOUR actual template ID  
const PUBLIC_KEY = 'npQR-abc123xyz'; // Replace with YOUR actual public key
```

## ✅ Test the Form
1. Go to http://localhost:8080/contact
2. Fill out the form completely
3. Click "Send Inquiry"
4. Check your email at `sales@thrayana.com`

## 🔧 Troubleshooting

### If you get "EmailJS is not configured" error:
- You haven't replaced the placeholder values yet
- Check browser console (F12) for detailed instructions

### If you get "Failed to send inquiry" error:
- Check your EmailJS service is active
- Verify SMTP credentials are correct
- Check browser console for specific error details

### If emails don't arrive:
- Check spam folder
- Verify email service is connected properly
- Test with a different email template

## 📞 Need Help?
1. Check browser console (F12 → Console tab) for error messages
2. Verify all three credentials are properly set
3. Test EmailJS service separately in their dashboard

---
**Once configured, your contact form will send professional emails directly to sales@thrayana.com!**
