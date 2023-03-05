package com.patzgn.geekcollection.game;

import com.patzgn.geekcollection.genre.Genre;
import com.patzgn.geekcollection.platform.Platform;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
class GameSearchParametersSpecification implements Specification<Game> {

    private final GameSearchParameters params;

    @Override
    public Predicate toPredicate(Root<Game> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();

        if (params.getGenre() != null) {
            SetJoin<Game, Genre> genres = root.joinSet("genres", JoinType.INNER);
            predicates.add(criteriaBuilder.equal(genres.get("name"), params.getGenre()));
        }
        if (params.getPlatform() != null) {
            SetJoin<Game, Platform> platforms = root.joinSet("platforms", JoinType.INNER);
            predicates.add(criteriaBuilder.equal(platforms.get("name"), params.getPlatform()));
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }

}
