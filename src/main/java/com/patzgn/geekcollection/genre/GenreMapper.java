package com.patzgn.geekcollection.genre;

import com.patzgn.geekcollection.genre.dto.GenreDto;
import org.springframework.stereotype.Service;

@Service
class GenreMapper {

    GenreDto toDto(Genre genre) {
        return GenreDto.builder()
                .id(genre.getId())
                .name(genre.getName())
                .description(genre.getDescription())
                .build();
    }

    Genre toEntity(GenreDto genre) {
        return new Genre(
                genre.id(),
                genre.name(),
                genre.description()
        );
    }

}
