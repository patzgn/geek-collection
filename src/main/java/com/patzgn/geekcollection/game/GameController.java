package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/games")
@CrossOrigin(origins = "http://localhost:3000")
public class GameController {

    private final GameService gameService;

    @GetMapping
    Page<GameDto> findAllGames(@RequestParam(required = false) String title,
                                                      @RequestParam(required = false) String genre,
                                                      @RequestParam(required = false) String platform,
                                                      @PageableDefault(sort = "title")Pageable pageable) {
        GameSearchParameters params = new GameSearchParameters(title, genre, platform);
        Page<GameDto> games = gameService.findAllGames(params, pageable);
        return games;
    }

    @GetMapping("/{id}")
    ResponseEntity<GameDto> findGameById(@PathVariable Long id) {
        return gameService.findGameById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
