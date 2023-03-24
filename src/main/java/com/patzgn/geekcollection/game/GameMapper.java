package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import com.patzgn.geekcollection.genre.Genre;
import com.patzgn.geekcollection.platform.Platform;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
class GameMapper {

    GameDto toDto(Game game) {
        return GameDto.builder()
                .id(game.getId())
                .title(game.getTitle())
                .genres(game.getGenres()
                        .stream()
                        .map(Genre::getName)
                        .collect(Collectors.toList()))
                .platforms(game.getPlatforms()
                        .stream()
                        .map(Platform::getName)
                        .collect(Collectors.toList()))
                .shortDescription(game.getShortDescription())
                .description(game.getDescription())
                .releaseDate(game.getReleaseDate())
                .poster(game.getPoster())
                .build();
    }

}
