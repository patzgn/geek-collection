package com.patzgn.geekcollection.genre;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

class GenreServiceTest {

    @Mock
    GenreRepository genreRepository;
    @Mock
    GenreMapper genreMapper;

    private AutoCloseable autoCloseable;
    private GenreService underTest;

    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new GenreService(genreRepository, genreMapper);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void findAllGenres() {
        underTest.findAllGenres();

        verify(genreRepository).findAll();
    }

    @Test
    void findGenreByName() {
        String name = anyString();
        underTest.findGenreByName(name);

        verify(genreRepository).findByNameIgnoreCase(name);
    }

    @Test
    @Disabled
    void addGenre() {
    }
}