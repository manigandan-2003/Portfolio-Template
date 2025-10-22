package com.mani.server;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.util.HtmlUtils;

@Service
public class ContactService {

//    @Value("${MAIL_USERNAME}")
//    private String senderEmail;
//
//    @Value("${MAIL_RECEIVER}")
//    private String receiverEmail;

    private final String senderEmail = System.getenv("MAIL_USERNAME");
    private final String receiverEmail = System.getenv("MAIL_RECEIVER");

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(ContactRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(senderEmail);
        helper.setTo(receiverEmail);
        helper.setReplyTo(request.getEmail());
        helper.setSubject("Contact Form: " + request.getSubject());

        // sanitize all user inputs
        String safeName = HtmlUtils.htmlEscape(request.getName());
        String safeEmail = HtmlUtils.htmlEscape(request.getEmail());
        String safeSubject = HtmlUtils.htmlEscape(request.getSubject());
        String safeMessage = HtmlUtils.htmlEscape(request.getMessage());

        // HTML email content
        String htmlContent = "<html>" +
                "<body>" +
                "<h2>New Contact Request</h2>" +
                "<p><strong>Name:</strong> " + request.getName() + "</p>" +
                "<p><strong>Email:</strong> " + request.getEmail() + "</p>" +
                "<p><strong>Subject:</strong> " + request.getSubject() + "</p>" +
                "<p><strong>Message:</strong><br/>" + request.getMessage() + "</p>" +
                "<hr/>" +
                "<p>This is an automated message from your website.</p>" +
                "</body>" +
                "</html>";

        helper.setText(htmlContent, true); // true = isHtml
        mailSender.send(message);
    }
}
