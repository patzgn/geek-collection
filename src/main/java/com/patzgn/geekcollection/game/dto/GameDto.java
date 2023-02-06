package com.patzgn.geekcollection.game.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class GameDto {

    private Long id;
    private String title;
    private String shortDescription;
    private String description;
    private LocalDate releaseDate;
    private String poster;

}
