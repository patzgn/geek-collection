package com.patzgn.geekcollection.platform;

class PlatformDtoMapper {

    static PlatformDto toDto(Platform platform) {
        return new PlatformDto(
                platform.getId(),
                platform.getName(),
                platform.getDescription()
        );
    }

}
