package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import com.patzgn.geekcollection.genre.Genre;
import com.patzgn.geekcollection.platform.Platform;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
class GameMapper {

    GameDto toDto(Game game) {
        return new GameDto(
                game.getId(),
                game.getTitle(),
                game.getGenres()
                        .stream()
                        .map(Genre::getName)
                        .collect(Collectors.toList()),
                game.getPlatforms()
                        .stream()
                        .map(Platform::getName)
                        .collect(Collectors.toList()),
                game.getShortDescription(),
                game.getDescription(),
                game.getReleaseDate(),
                game.getPoster()
        );
    }

}
