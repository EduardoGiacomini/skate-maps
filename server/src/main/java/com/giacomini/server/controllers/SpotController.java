package com.giacomini.server.controllers;

import com.giacomini.server.entities.Spot;
import com.giacomini.server.repositories.SpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SpotController {
    @Autowired
    SpotRepository spotRepository;

    @PostMapping("/api/spots")
    public ResponseEntity<Spot> create(@RequestBody @Validated Spot spot) {
        Spot createdSpot = spotRepository.save(spot);
        return new ResponseEntity<Spot>(createdSpot, HttpStatus.CREATED);
    }

    @GetMapping("/api/spots")
    public ResponseEntity<List<Spot>> findAll() {
        List<Spot> spots = (List<Spot>) spotRepository.findAll();

        if (spots.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<Spot>>(spots, HttpStatus.OK);
    }
}
