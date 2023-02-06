package com.patzgn.geekcollection.genre;

import org.springframework.stereotype.Service;

@Service
class GenreMapper {

    GenreDto toDto(Genre genre) {
        return new GenreDto(
                genre.getId(),
                genre.getName(),
                genre.getDescription()
        );
    }

}
