package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.game.dto.GameDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
class GameService {

    private final GameRepository gameRepository;
    private final GameMapper gameMapper;

    List<GameDto> findAllGames(GameSearchParameters params) {
        GameSearchParametersSpecification specification = new GameSearchParametersSpecification(params);
        return gameRepository.findAll(specification)
                .stream()
                .map(gameMapper::toDto)
                .collect(Collectors.toList());
    }

    Optional<GameDto> findGameById(Long id) {
        return gameRepository.findById(id)
                .map(gameMapper::toDto);
    }

}
