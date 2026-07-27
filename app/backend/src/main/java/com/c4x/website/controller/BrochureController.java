package com.c4x.website.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Serves the company brochure PDF for the "Download Brochure" button.
 *
 * Drop the real file at:
 *   src/main/resources/static/brochure/c4x-brochure.pdf
 * and it will be downloadable at GET /api/brochure — no code change needed.
 */
@RestController
@RequestMapping("/api/brochure")
public class BrochureController {

    @GetMapping
    public ResponseEntity<Resource> downloadBrochure() {
        Resource file = new ClassPathResource("static/brochure/c4x-brochure.pdf");
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"C4X-AAC-Brochure.pdf\"")
                .body(file);
    }
}
