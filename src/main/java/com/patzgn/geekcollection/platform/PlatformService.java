package com.patzgn.geekcollection.platform;

import com.patzgn.geekcollection.platform.dto.PlatformDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
class PlatformService {

    private final PlatformRepository platformRepository;
    private final PlatformMapper platformMapper;

    Optional<PlatformDto> findPlatformByName(String name) {
        return platformRepository.findByNameIgnoreCase(name)
                .map(platformMapper::toDto);
    }

}
