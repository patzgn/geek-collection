package com.patzgn.geekcollection.user;

import com.patzgn.geekcollection.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    List<UserDto> findAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::toUserDto)
                .collect(Collectors.toList());
    }

}
