package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/games")
public class GameController {

    private final GameService gameService;

    @GetMapping
    List<GameDto> findAllGames(@RequestParam(required = false) String genre, @RequestParam(required = false) String platform) {
        GameSearchParameters params = new GameSearchParameters(genre, platform);
        return gameService.findAllGames(params);
    }

    @GetMapping("/{id}")
    ResponseEntity<GameDto> findGameById(@PathVariable Long id) {
        return gameService.findGameById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
