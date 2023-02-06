package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import org.springframework.stereotype.Service;

@Service
class GameMapper {

    GameDto toDto(Game game) {
        return new GameDto(
                game.getId(),
                game.getTitle(),
                game.getShortDescription(),
                game.getDescription(),
                game.getReleaseDate(),
                game.getPoster()
        );
    }

}
