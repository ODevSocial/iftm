package org.iftm.gerenciadorveterinarios.selenium;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class VeterinarioSeleniumTest extends BaseSeleniumTest {

    @Test
    public void deveCadastrarVeterinario() {

        // Acessa a tela de cadastro
        driver.get("http://localhost:8080/form");

        // Preenche o formulário
        driver.findElement(By.id("nome"))
                .sendKeys("Gabriel Mota");

        driver.findElement(By.id("inputEmail"))
                .sendKeys("gabriel.mrodrigues@estudante.iftm.edu.br");

        driver.findElement(By.id("inputEspecialidade"))
                .sendKeys("Grande");

        driver.findElement(By.id("inputSalario"))
                .sendKeys("15000");

        // Clica no botão cadastrar
        driver.findElement(
                By.xpath("//button[contains(text(),'Cadastrar')]"))
                .click();

        // Verifica se foi redirecionado para a Home
        assertTrue(driver.getCurrentUrl().contains("home"));
    }
}