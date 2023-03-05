package com.patzgn.geekcollection.platform;

import org.springframework.stereotype.Service;

@Service
class PlatformMapper {

    PlatformDto toDto(Platform platform) {
        return new PlatformDto(
                platform.getId(),
                platform.getName(),
                platform.getDescription()
        );
    }

}
