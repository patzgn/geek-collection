package com.patzgn.geekcollection.usergame;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface UserGameRepository extends JpaRepository<UserGame, Long> {

    List<UserGame> findAllByUser_Email(String email);

}
