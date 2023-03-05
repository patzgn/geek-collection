package com.patzgn.geekcollection.game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

interface GameRepository extends JpaRepository<Game, Long>, JpaSpecificationExecutor<Game> {

}
