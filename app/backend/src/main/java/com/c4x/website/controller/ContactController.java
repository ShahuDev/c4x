package com.c4x.website.controller;

import com.c4x.website.model.ContactRequest;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Handles enquiries submitted from the Contact section's form.
 * Every submission is logged, and — if mail credentials are configured in
 * application.properties — forwarded by email to the sales inbox so nothing
 * gets missed even before the CRM/quote-calculator (phase 2) is built.
 */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    private final JavaMailSender mailSender;

    @Value("${c4x.contact.notify-email:pc4xaacblocks2023@gmail.com}")
    private String notifyEmail;

    @Value("${c4x.mail.enabled:false}")
    private boolean mailEnabled;

    public ContactController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping
    public ResponseEntity<?> submitEnquiry(@Valid @RequestBody ContactRequest request) {
        log.info("New enquiry received: name={}, mobile={}", request.getName(), request.getMobile());

        if (mailEnabled) {
            try {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(notifyEmail);
                mail.setSubject("New website enquiry — " + request.getName());
                mail.setText("Name: " + request.getName()
                        + "\nMobile: " + request.getMobile()
                        + "\nMessage: " + (request.getMessage() == null ? "-" : request.getMessage()));
                mailSender.send(mail);
            } catch (Exception e) {
                // Don't fail the request just because email delivery failed —
                // the enquiry is already logged above.
                log.warn("Could not send enquiry email: {}", e.getMessage());
            }
        }

        return ResponseEntity.ok(Map.of(
                "status", "received",
                "message", "Thanks! Our team will call or WhatsApp you shortly."
        ));
    }
}
