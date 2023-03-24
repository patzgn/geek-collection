package com.patzgn.geekcollection.genre;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
class GenreRepositoryTest {

    @Autowired
    private GenreRepository underTest;

    @Test
    void shouldFindGenreByNameIgnoreCase() {
        // given
        Genre genre = new Genre(
                1L,
                "Action",
                "An action game is a video game genre that emphasizes physical challenges, including hand–eye coordination and reaction time."
        );
        underTest.save(genre);

        // when
        boolean expected = underTest.findByNameIgnoreCase("action").isPresent();

        // then
        assertThat(expected).isTrue();
    }
}
