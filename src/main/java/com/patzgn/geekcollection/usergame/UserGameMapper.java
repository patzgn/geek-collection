package com.patzgn.geekcollection.usergame;

import com.patzgn.geekcollection.usergame.dto.UserGameDto;
import org.springframework.stereotype.Service;

@Service
class UserGameMapper {

    UserGameDto toDto(UserGame game) {
        return UserGameDto.builder()
                .id(game.getId())
                .user(game.getUser().getUsername())
                .gameTitle(game.getGame().getTitle())
                .status(game.getStatus().name())
                .build();
    }

}
