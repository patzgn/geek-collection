package com.patzgn.geekcollection.user;

import com.patzgn.geekcollection.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
class UserController {

    private final UserService userService;

    @GetMapping
    List<UserDto> findAllUsers() {
        return userService.findAllUsers();
    }

}
