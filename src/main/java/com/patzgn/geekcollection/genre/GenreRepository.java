package com.patzgn.geekcollection.genre;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

interface GenreRepository extends JpaRepository<Genre, Long> {

    Optional<Genre> findByNameIgnoreCase(String name);

}
