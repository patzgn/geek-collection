package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
class GameService {

    private final GameRepository gameRepository;
    private final GameMapper gameMapper;

    Page<GameDto> findAllGames(GameSearchParameters params, Pageable pageable) {
        GameSearchParametersSpecification specification = new GameSearchParametersSpecification(params);
        return gameRepository.findAll(specification, pageable)
                .map(gameMapper::toDto);
    }

    Optional<GameDto> findGameById(Long id) {
        return gameRepository.findById(id)
                .map(gameMapper::toDto);
    }

}
