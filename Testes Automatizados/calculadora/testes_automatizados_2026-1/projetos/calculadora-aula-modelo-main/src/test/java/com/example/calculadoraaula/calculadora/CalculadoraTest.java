package com.example.calculadoraaula.calculadora;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;


public class CalculadoraTest {
    @Test
    @DisplayName("Deve somar dois inteiros positivos")
    public void testeSomaDosNumeros() {
        // Arrange - definir o cenário de teste
        // instâncias necessárias
        // entradas do cenário
        // saídas esperadas

        Calculadora calculadoraTestada = new Calculadora();
        // arrange
        int primeiroNumero = 2;
        int segundoNumero = 3;
        int resultadoEsperado = 5;

        // act
        int resultadoObtido = calculadoraTestada.somar(primeiroNumero, segundoNumero);

        // assert
        Assertions.assertEquals(resultadoEsperado, resultadoObtido);
    }

    @Test
    @DisplayName("Deve subtrair dois inteiros positivos")
    public void testeSubtraçãoDosNumeros() {
        // Arrange - definir o cenário de teste
        // instâncias necessárias
        // entradas do cenário
        // saídas esperadas

        Calculadora calculadoraTestada = new Calculadora();
        // arrange
        int primeiroNumero = 5;
        int segundoNumero = 3;
        int resultadoEsperado = 2;

        // act
        int resultadoObtido = calculadoraTestada.subtrair(primeiroNumero, segundoNumero);

        // assert
        Assertions.assertEquals(resultadoEsperado, resultadoObtido);
    }

        @Test
    @DisplayName("Deve subtrair dois inteiros positivos")
    public void testeMultiplicaçãoDosNumeros() {
        // Arrange - definir o cenário de teste
        // instâncias necessárias
        // entradas do cenário
        // saídas esperadas

        Calculadora calculadoraTestada = new Calculadora();
        // arrange
        int primeiroNumero = 5;
        int segundoNumero = 3;
        int resultadoEsperado = 15;

        // act
        int resultadoObtido = calculadoraTestada.multiplicar(primeiroNumero, segundoNumero);

        // assert
        Assertions.assertEquals(resultadoEsperado, resultadoObtido);
    }

}
