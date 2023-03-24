package com.patzgn.geekcollection.platform.dto;

import lombok.Builder;

@Builder
public record PlatformDto(
        Long id,
        String name,
        String description
) {

}
