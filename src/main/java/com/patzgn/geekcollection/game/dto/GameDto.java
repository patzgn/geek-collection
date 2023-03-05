package com.patzgn.geekcollection.game.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
public class GameDto {

    private Long id;
    private String title;
    private List<String> genres;
    private List<String> platforms;
    private String shortDescription;
    private String description;
    private LocalDate releaseDate;
    private String poster;

}
