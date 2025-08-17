# Email System Setup Instructions

## Overview
This project now uses a backend server with nodemailer to send emails directly to sales@thrayana.com, along with react-hot-toast for beautiful notifications.

## Features
- ✅ **Backend Email Server**: Node.js server with nodemailer
- ✅ **Professional Notifications**: react-hot-toast for success/error messages
- ✅ **Professional Email Template**: HTML email with Thrayana branding
- ✅ **Form Validation**: Client-side validation with proper error messages
- ✅ **Loading States**: Professional loading animations

## Quick Start

### 1. Start the Backend Server
```bash
npm run server
```
This will start the email server on http://localhost:3001

### 2. Start the Frontend (in a new terminal)
```bash
npm run dev
```
This will start the React app on http://localhost:8080

### 3. Run Both Simultaneously
```bash
npm run dev:full
```
This runs both frontend and backend together.

## Email Configuration

The backend server is configured with your SMTP credentials:
- **Host**: mail.thrayana.com
- **Port**: 465 (SSL)
- **Email**: sales@thrayana.com
- **Password**: Thrayana@12345

## How It Works

### Frontend (Contact Form)
1. User fills out the contact form
2. Form validates required fields
3. Shows loading toast notification
4. Sends data to backend API
5. Shows success/error toast notification
6. Resets form on success

### Backend (Email Server)
1. Receives form data via POST /api/contact
2. Creates professional HTML email template
3. Sends email to sales@thrayana.com
4. Returns success/error response

### Email Template Features
- Professional design with Thrayana branding
- Responsive layout for mobile/desktop
- Structured customer information
- Product and requirements section
- Trade terms and shipment details
- Timestamp and submission details

## Testing the System

1. **Start both servers**: `npm run dev:full`
2. **Navigate to**: http://localhost:8080/contact
3. **Fill out the form** with test data
4. **Submit the form**
5. **Check for toast notifications**
6. **Verify email received** at sales@thrayana.com

## Troubleshooting

### Backend Issues
- Check if server is running on port 3001
- Verify SMTP credentials in server.js
- Check console for error messages
- Ensure firewall allows port 3001

### Frontend Issues
- Check if React app is running on port 8080
- Verify API endpoint in Contact.tsx
- Check browser console for errors
- Ensure CORS is properly configured

### Email Issues
- Verify SMTP credentials
- Check spam folder
- Ensure mail.thrayana.com is accessible
- Check email server logs

## File Structure
```
├── server.js                 # Backend email server
├── src/pages/Contact.tsx     # Contact form with toast notifications
├── package.json              # Dependencies and scripts
└── SETUP_INSTRUCTIONS.md     # This file
```

## Dependencies

### Backend
- express: Web server framework
- cors: Cross-origin resource sharing
- nodemailer: Email sending library
- dotenv: Environment variables

### Frontend
- react-hot-toast: Toast notifications
- lucide-react: Icons
- @radix-ui/react-*: UI components

## Production Deployment

### Backend
1. Deploy server.js to your hosting provider
2. Set environment variables for SMTP credentials
3. Update API endpoint in Contact.tsx
4. Configure CORS for your domain

### Frontend
1. Build the React app: `npm run build`
2. Deploy dist folder to your hosting provider
3. Update API endpoint to production URL

## Security Notes
- SMTP credentials are currently hardcoded (not recommended for production)
- Use environment variables for sensitive data
- Implement rate limiting to prevent spam
- Add CSRF protection for production use
- Use HTTPS in production

## Support
For issues or questions:
1. Check the troubleshooting section above
2. Review console logs for errors
3. Verify all dependencies are installed
4. Ensure both servers are running
