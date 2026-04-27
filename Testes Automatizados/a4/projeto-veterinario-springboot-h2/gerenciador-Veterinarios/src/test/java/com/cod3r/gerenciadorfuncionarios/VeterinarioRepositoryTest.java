package com.cod3r.gerenciadorfuncionarios;

import java.util.Optional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

import org.iftm.gerenciadorveterinarios.entities.Veterinario;
import org.iftm.gerenciadorveterinarios.repositories.VeterinarioRepository;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;

import scala.collection.immutable.ListMap;


@DataJpaTest
@TestMethodOrder(OrderAnnotation.class)
public class VeterinarioRepositoryTest {

    @Autowired
    private VeterinarioRepository repository;

    @Test
    @Order(2)
    public void testarBuscaVeterinarioComIdExistenteRetornaCorreto1() {
        // arrange
        int idExistente = 1;
        String nomeEsperado = "Conceição Evaristo";
        String emailEsperado = "conceicao@gmail.com";

        // act
        Veterinario veterinarioEncontrado = repository.getById(idExistente);

        // assert
        assertNotNull(veterinarioEncontrado);
        assertEquals(nomeEsperado, veterinarioEncontrado.getNome());
        assertEquals(emailEsperado, veterinarioEncontrado.getEmail());
    }

     @Test
    @Order(1)
    public void testarBuscaVeterinarioComIdExistenteRetornaCorreto2() {
        // arrange
        int idExistente = 1;
        String nomeEsperado = "Conceição Evaristo";
        String emailEsperado = "conceicao@gmail.com";

        // act
        Optional<Veterinario> veterinarioEncontrado = repository.findById(idExistente);

        // assert
        assertTrue(veterinarioEncontrado.isPresent());
        assertEquals(nomeEsperado, veterinarioEncontrado.get().getNome());
        assertEquals(emailEsperado, veterinarioEncontrado.get().getEmail());
    }



    @Test
void deveBuscarNomeExato() {
    // Arrange
    String nome = "Conceição Evaristo";

    // Act
    List<Veterinario> resultado = repository.findByNome(nome);

    // Assert
    assertFalse(resultado.isEmpty());
}

@Test
void naoDeveEncontrarNomeCaseDiferente() {
    List<Veterinario> resultado = repository.findByNome("conceição evaristo");

    assertTrue(resultado.isEmpty());
}

@Test
void deveBuscarNomeIgnoreCase() {
    List<Veterinario> resultado = repository.findByNomeIgnoreCase("conceição evaristo");

    assertFalse(resultado.isEmpty());
}

@Test
void deveBuscarPorParteDoNome() {
    List<Veterinario> resultado = repository.findByNomeContaining("Evaristo");

    assertFalse(resultado.isEmpty());
}

@Test
void naoDeveEncontrarNomeInexistente() {
    List<Veterinario> resultado = repository.findByNomeContaining("Maria");

    assertTrue(resultado.isEmpty());
}

@Test
void deveRetornarTodosQuandoVazio() {
    List<Veterinario> resultado = repository.findByNomeContaining("");

    assertFalse(resultado.isEmpty());
}

@Test
void deveBuscarSalarioMaiorQue() {
    List<Veterinario> resultado = repository.findBySalarioGreaterThan(4000.0);

    assertFalse(resultado.isEmpty());
}

@Test
void deveBuscarSalarioMenorQue() {
    List<Veterinario> resultado = repository.findBySalarioLessThan(4000.0);

    assertFalse(resultado.isEmpty());
}

@Test
void deveBuscarEntreValores() {
    List<Veterinario> resultado = repository.findBySalarioBetween(3000.0, 4500.0);

    assertFalse(resultado.isEmpty());
}

@Test
void deveAtualizarVeterinario() {

    // Arrange
    Veterinario vet = repository.findByNome("Conceição Evaristo").get(0);

    // Act
    vet.setNome("Conceição Atualizada");
    vet.setSalario(BigDecimal.valueOf(9999.0));

    repository.save(vet);

    // Assert
    assertTrue(repository.findByNome("Conceição Evaristo").isEmpty());
    assertFalse(repository.findByNome("Conceição Atualizada").isEmpty());
}

}
