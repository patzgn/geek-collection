package com.patzgn.geekcollection.platform;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

interface PlatformRepository extends CrudRepository<Platform, Long> {

    Optional<Platform> findByNameIgnoreCase(String name);

}
