package org.iftm.gerenciadorveterinarios.servicies;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.iftm.gerenciadorveterinarios.entities.Animal;
import org.iftm.gerenciadorveterinarios.repositories.AnimalRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class AnimalServiceTest {

    @Mock
    private AnimalRepository repositorio;

    @InjectMocks
    private AnimalService service;

    // CICLO 1

    @Test
    public void deveCadastrarAnimalComoInternado() {

        // Arrange
        Animal animal = new Animal();
        animal.setNome("Rex");
        animal.setEspecie("Cachorro");
        animal.setInternado(false);

        when(repositorio.save(any())).thenReturn(animal);

        // Act
        Animal resposta = service.cadastrar(animal);

        // Assert
        assertTrue(resposta.getInternado());

        verify(repositorio).save(animal);
    }

    // CICLO 2

    @Test
    public void deveLancarExcecaoQuandoEspecieForInvalida() {

        // Arrange
        Animal animal = new Animal();
        animal.setNome("Rex");
        animal.setEspecie("Dinossauro");

        // Act + Assert
        assertThrows(IllegalArgumentException.class, () -> {
            service.cadastrar(animal);
        });

        verify(repositorio, never()).save(any());
    }

    // CICLO 3

    @Test
    public void deveDarAltaNoAnimal() {

        // Arrange
        Animal animal = new Animal();
        animal.setId(1);
        animal.setNome("Rex");
        animal.setInternado(true);

        when(repositorio.findById(1))
                .thenReturn(Optional.of(animal));

        when(repositorio.save(any()))
                .thenReturn(animal);

        // Act
        Animal resposta = service.darAlta(1);

        // Assert
        assertFalse(resposta.getInternado());

        verify(repositorio).findById(1);
        verify(repositorio).save(animal);
    }
}