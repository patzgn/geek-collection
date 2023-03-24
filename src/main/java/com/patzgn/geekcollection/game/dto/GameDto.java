package com.patzgn.geekcollection.game.dto;

import lombok.Builder;

import java.time.LocalDate;
import java.util.List;

@Builder
public record GameDto(
        Long id,
        String title,
        List<String> genres,
        List<String> platforms,
        String shortDescription,
        String description,
        LocalDate releaseDate,
        String poster
) {

}
