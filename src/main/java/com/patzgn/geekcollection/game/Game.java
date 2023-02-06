package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.genre.Genre;
import com.patzgn.geekcollection.platform.Platform;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Set;

@Data
@Entity
class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String title;

    @ManyToMany
    @JoinTable(
            name = "game_genre",
            joinColumns = @JoinColumn(name = "game_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id", referencedColumnName = "id")
    )
    private Set<Genre> genres;

    @ManyToMany
    @JoinTable(
            name = "game_platform",
            joinColumns = @JoinColumn(name = "game_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "platform_id", referencedColumnName = "id")
    )
    private Set<Platform> platforms;

    private String shortDescription;

    private String description;

    private LocalDate releaseDate;

    private String poster;

}
