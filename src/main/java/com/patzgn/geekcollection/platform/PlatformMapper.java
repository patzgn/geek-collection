package com.patzgn.geekcollection.platform;

import com.patzgn.geekcollection.platform.dto.PlatformDto;
import org.springframework.stereotype.Service;

@Service
class PlatformMapper {

    PlatformDto toDto(Platform platform) {
        return PlatformDto.builder()
                .id(platform.getId())
                .name(platform.getName())
                .description(platform.getDescription()).build();
    }

}
