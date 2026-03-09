package org.iftm.atividadea2;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class CalculadoraTest {
    
    @Test
    public void testarConstrutorVazioInicializaMemoriaZerada() {
        // Arrange
        int memoriaEsperada = 0;
        // Act
        Calculadora calculadora = new Calculadora();
        int memoriaObtida = calculadora.getMemoria();
        // Assert
        assertEquals(memoriaEsperada, memoriaObtida);
    }
}
