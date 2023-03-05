package com.patzgn.geekcollection.genre;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class GenreDto {

    private Long id;
    private String name;
    private String description;

}
