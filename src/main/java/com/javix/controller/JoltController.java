package com.javix.controller;

import com.javix.model.FormatResponse;
import com.javix.model.JoltRequest;
import com.javix.service.JoltService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jolt")
@CrossOrigin(origins = "*")
public class JoltController {

    private final JoltService joltService;

    public JoltController(JoltService joltService) {
        this.joltService = joltService;
    }

    @PostMapping("/transform")
    public FormatResponse transform(@RequestBody JoltRequest request) {
        try {
            String result = joltService.transform(request.getInputJson(), request.getSpecJson());
            return new FormatResponse(result, null);
        } catch (Exception e) {
            return new FormatResponse(null, "JOLT Error: " + e.getMessage());
        }
    }
}
