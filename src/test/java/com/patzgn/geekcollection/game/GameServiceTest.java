package com.patzgn.geekcollection.game;

import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Pageable;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.verify;

class GameServiceTest {

    @Mock private GameRepository gameRepository;
    @Mock private GameMapper gameMapper;
    @Mock private GameSearchParameters gameSearchParameters;
    @Mock private Pageable pageable;

    private GameSearchParametersSpecification specification;
    private AutoCloseable autoCloseable;
    private GameService underTest;

    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        specification = new GameSearchParametersSpecification(gameSearchParameters);
        underTest = new GameService(gameRepository, gameMapper);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    @Disabled
    void canFindAllGames() {
        underTest.findAllGames(gameSearchParameters, pageable);

        verify(gameRepository.findAll(specification, pageable));
    }

    @Test
    void findGameById() {
        long id = anyLong();
        underTest.findGameById(id);

        verify(gameRepository).findById(id);
    }
}