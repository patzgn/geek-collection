package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/games")
public class GameController {

    private final GameService gameService;

    @GetMapping
    List<GameDto> findAllGames() {
        return gameService.findAllGames();
    }

    @GetMapping("/{id}")
    ResponseEntity<GameDto> findGameById(@PathVariable Long id) {
        return gameService.findGameById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
