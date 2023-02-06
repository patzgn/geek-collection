package com.patzgn.geekcollection.platform;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class PlatformDto {

    private Long id;
    private String name;
    private String description;

}
