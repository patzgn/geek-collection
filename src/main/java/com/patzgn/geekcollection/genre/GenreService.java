package com.patzgn.geekcollection.genre;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class GenreService {

    private final GenreRepository genreRepository;

    GenreDto findGenreByName(String name) {
        return genreRepository.findByNameIgnoreCase(name)
                .map(GenreDtoMapper::toDto)
                .orElseThrow();
    }

}
