package com.patzgn.geekcollection.genre;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/genres")
public class GenreController {

    private final GenreService genreService;

    @GetMapping
    List<GenreDto> findAllGenres() {
        return genreService.findAllGenres();
    }

    @PostMapping
    ResponseEntity<GenreDto> addGenre(@RequestBody GenreDto genre) {
        GenreDto savedGenre = genreService.addGenre(genre);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedGenre.getId())
                .toUri();
        return ResponseEntity.created(location).body(savedGenre);
    }

}
