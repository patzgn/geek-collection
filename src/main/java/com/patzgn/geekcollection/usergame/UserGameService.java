package com.patzgn.geekcollection.usergame;

import com.patzgn.geekcollection.usergame.dto.UserGameDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
class UserGameService {

    private final UserGameRepository userGameRepository;
    private final UserGameMapper userGameMapper;

    public List<UserGameDto> findAllUserGamesByUser(String username) {
        return userGameRepository.findAllByUser_Username(username)
                .stream()
                .map(userGameMapper::toDto)
                .collect(Collectors.toList());
    }

}
