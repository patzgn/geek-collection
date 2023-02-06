package com.patzgn.geekcollection.genre;

class GenreDtoMapper {

    static GenreDto toDto(Genre genre) {
        return new GenreDto(
                genre.getId(),
                genre.getName(),
                genre.getDescription()
        );
    }

}
