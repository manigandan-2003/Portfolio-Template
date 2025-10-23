import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import sanitizeHtml from "sanitize-html";

dotenv.config();

const app = express();

// Configure CORS (restrict to your portfolio domain if needed)
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN, // e.g., "https://manigandan-portfolio.vercel.app"
  })
);

app.use(express.json());

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/contact", async (req, res) => {
  let { name, email, subject, message } = req.body;

  // Basic input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Sanitize inputs to prevent XSS or HTML injection
  name = sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} });
  email = sanitizeHtml(email, { allowedTags: [], allowedAttributes: {} });
  subject = sanitizeHtml(subject, { allowedTags: [], allowedAttributes: {} });
  message = sanitizeHtml(message, { allowedTags: [], allowedAttributes: {} });

  // Email configuration
  const msg = {
    to: process.env.RECEIVER_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: `Portfolio Contact: ${subject}`,
    replyTo: email,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Email microservice running on port ${PORT}`)
);
