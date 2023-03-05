package com.patzgn.geekcollection.usergame.dto;

import lombok.Builder;

@Builder
public record UserGameDto(Long id, String user, String gameTitle) {

}
