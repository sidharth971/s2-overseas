import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
	cors({
		origin: ["http://localhost:8080", "http://192.168.1.8:8080"],
	})
);
app.use(express.json());

const smtpUser = process.env.SMTP_USER || "sales@thrayana.com";
const smtpPass = process.env.SMTP_PASS || "Thrayana@12345";

// Create SMTP transporter (webmail, not Gmail)
const transporter = nodemailer.createTransport({
	host: "mail.thrayana.com",
	port: 465,
	secure: true, // SSL
	tls: {
		rejectUnauthorized: false, // allow self-signed/legacy certs often used on cPanel/webmail
	},
	auth: {
		user: smtpUser,
		pass: smtpPass,
	},
});

// Verify transporter at startup for easier debugging
transporter.verify((err, success) => {
	if (err) {
		console.error("SMTP connection failed:", err.message);
	} else {
		console.log("SMTP server is ready to take our messages");
	}
});

app.post("/api/contact", async (req, res) => {
	try {
		const {
			name,
			email,
			phone,
			company,
			country,
			product,
			message,
			userType,
			incoterms,
			shipmentType,
		} = req.body;

		if (!name || !email || !product || !country || !message) {
			return res.status(400).json({ ok: false, error: "Missing required fields" });
		}

		const htmlContent = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Inquiry - Thrayana</title></head><body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;"><div style="max-width:600px;margin:20px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1)"><div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:30px;text-align:center"><h1 style="margin:0;font-size:28px;font-weight:bold">New Inquiry Received</h1><p style="margin:10px 0 0 0;opacity:.9;font-size:16px">Thrayana Export Services</p></div><div style="padding:30px;background:#f9f9f9"><h2 style="color:#333;border-bottom:2px solid #667eea;padding-bottom:10px;margin-top:0">Customer Information</h2><table style="width:100%;border-collapse:collapse"><tr><td style="padding:12px 0;font-weight:bold;color:#555;width:30%">Name:</td><td style="padding:12px 0;color:#333">${name}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555">Email:</td><td style="padding:12px 0;color:#333">${email}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555">Phone:</td><td style="padding:12px 0;color:#333">${phone || "Not provided"}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555">Company:</td><td style="padding:12px 0;color:#333">${company || "Not provided"}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555">User Type:</td><td style="padding:12px 0;color:#333">${userType || "Not specified"}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555">Country:</td><td style="padding:12px 0;color:#333">${country}</td></tr></table></div><div style="padding:30px"><h2 style="color:#333;border-bottom:2px solid #667eea;padding-bottom:10px;margin-top:0">Product & Requirements</h2><table style="width:100%;border-collapse:collapse"><tr><td style="padding:12px 0;font-weight:bold;color:#555;width:30%">Product:</td><td style="padding:12px 0;color:#333">${product}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555">InCoTerms:</td><td style="padding:12px 0;color:#333">${incoterms || "Not specified"}</td></tr><tr><td style="padding:12px 0;font-weight:bold;color:#555">Shipment Type:</td><td style="padding:12px 0;color:#333">${shipmentType || "Not specified"}</td></tr></table><div style="margin-top:30px"><h3 style="color:#333;margin-bottom:15px">Customer Message:</h3><div style="background:#f5f5f5;padding:20px;border-radius:8px;border-left:4px solid #667eea"><p style="margin:0;line-height:1.6;color:#333;font-size:14px">${message}</p></div></div></div><div style="background:#f0f0f0;padding:20px;text-align:center"><p style="margin:0;color:#666;font-size:14px"><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p><p style="margin:10px 0 0 0;color:#666;font-size:12px">This inquiry was submitted through the Thrayana website contact form.</p></div></div></body></html>`;

		await transporter.sendMail({
			from: `"Thrayana Website" <${smtpUser}>`,
			to: "sales@thrayana.com",
			subject: `New Inquiry from ${name} - ${product}`,
			replyTo: email,
			text: `New Inquiry from Thrayana Website\n\nCustomer Details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone || "Not provided"}\n- Company: ${company || "Not provided"}\n- User Type: ${userType || "Not specified"}\n- Country: ${country}\n\nProduct & Requirements:\n- Product: ${product}\n- Message: ${message}\n\nTrade Terms:\n- InCoTerms: ${incoterms || "Not specified"}\n- Shipment Type: ${shipmentType || "Not specified"}\n\nSubmitted on: ${new Date().toLocaleString()}`,
			html: htmlContent,
		});

		return res.json({ ok: true, message: "Email sent successfully" });
	} catch (err) {
		console.error("Email send error:", err);
		return res.status(500).json({ ok: false, error: "Email send failed", details: err?.message });
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
