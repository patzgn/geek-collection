package com.patzgn.geekcollection.genre;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
class GenreService {

    private final GenreRepository genreRepository;
    private final GenreMapper genreMapper;

    Optional<GenreDto> findGenreByName(String name) {
        return genreRepository.findByNameIgnoreCase(name)
                .map(genreMapper::toDto);
    }

}
