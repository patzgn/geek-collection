package com.patzgn.geekcollection.platform;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class PlatformService {

    private final PlatformRepository platformRepository;

    PlatformDto findPlatformByName(String name) {
        return platformRepository.findByNameIgnoreCase(name)
                .map(PlatformDtoMapper::toDto)
                .orElseThrow();
    }

}
