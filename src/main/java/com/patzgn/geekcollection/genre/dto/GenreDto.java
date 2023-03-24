package com.patzgn.geekcollection.genre.dto;

import lombok.Builder;

@Builder
public record GenreDto(
        Long id,
        String name,
        String description
) {

}
