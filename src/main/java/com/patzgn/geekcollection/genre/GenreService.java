package com.patzgn.geekcollection.genre;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
class GenreService {

    private final GenreRepository genreRepository;
    private final GenreMapper genreMapper;

    List<GenreDto> findAllGenres() {
        return genreRepository.findAll()
                .stream()
                .map(genreMapper::toDto)
                .collect(Collectors.toList());
    }

    Optional<GenreDto> findGenreByName(String name) {
        return genreRepository.findByNameIgnoreCase(name)
                .map(genreMapper::toDto);
    }

    GenreDto addGenre(GenreDto genre) {
        Genre genreEntity = genreMapper.toEntity(genre);
        Genre savedGenre = genreRepository.save(genreEntity);
        return genreMapper.toDto(savedGenre);
    }

}
