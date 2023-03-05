package com.patzgn.geekcollection.user;

import com.patzgn.geekcollection.user.dto.UserDto;
import org.springframework.stereotype.Service;

@Service
class UserMapper {

    UserDto toUserDto(User user) {
        return new UserDto(user.getEmail());
    }

}
