package com.patzgn.geekcollection.usergame;

import com.patzgn.geekcollection.game.Game;
import com.patzgn.geekcollection.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class UserGame {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @Column(nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "game_id", referencedColumnName = "id")
    @Column(nullable = false)
    private Game game;

}
