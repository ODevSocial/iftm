package br.com.empresa;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class FuncionarioTest {

    // horas

    @Test
    void horasAbaixoDoMinimoGeraErro() {
        Funcionario f = new Funcionario("João", 40, 20);

        Exception ex = assertThrows(IllegalArgumentException.class,
                () -> f.setHorasTrabalhadas(10));

        assertEquals("Horas devem estar entre 20 e 160.", ex.getMessage());
    }

    @Test
    void horasAcimaDoMaximoGeraErro() {
        Funcionario f = new Funcionario("João", 40, 20);

        Exception ex = assertThrows(IllegalArgumentException.class,
                () -> f.setHorasTrabalhadas(200));

        assertEquals("Horas devem estar entre 20 e 160.", ex.getMessage());
    }

    @Test
    void horasValidasFuncionam() {
        Funcionario f = new Funcionario("João", 40, 20);
        f.setHorasTrabalhadas(100);

        assertEquals(100, f.horasTrabalhadas);
    }

    // valor hora

    @Test
    void valorHoraAbaixoLimiteGeraErro() {
        Funcionario f = new Funcionario("João", 40, 20);

        Exception ex = assertThrows(IllegalArgumentException.class,
                () -> f.setValorHora(10));

        assertEquals("Valor por hora deve estar entre 15.18 e 151.8.", ex.getMessage());
    }

    @Test
    void valorHoraAcimaLimiteGeraErro() {
        Funcionario f = new Funcionario("João", 40, 20);

        Exception ex = assertThrows(IllegalArgumentException.class,
                () -> f.setValorHora(200));

        assertEquals("Valor por hora deve estar entre 15.18 e 151.8.", ex.getMessage());
    }

    @Test
    void valorHoraValidoFunciona() {
        Funcionario f = new Funcionario("João", 40, 20);
        f.setValorHora(50);

        assertEquals(50, f.valorHora);
    }

    // pagamento

    @Test
    void pagamentoAbaixoMinimoGeraErro() {
        Funcionario f = new Funcionario("João", 20, 15.18);

        Exception ex = assertThrows(IllegalArgumentException.class,
                f::calcularPagamento);

        assertEquals("Pagamento deve estar entre 1518.00 e 10000.00.", ex.getMessage());
    }

    @Test
    void pagamentoAcimaMaximoGeraErro() {
        Funcionario f = new Funcionario("João", 160, 151.8);

        Exception ex = assertThrows(IllegalArgumentException.class,
                f::calcularPagamento);

        assertEquals("Pagamento deve estar entre 1518.00 e 10000.00.", ex.getMessage());
    }

    @Test
    void pagamentoValidoFunciona() {
        Funcionario f = new Funcionario("João", 100, 20);

        assertEquals(2000, f.calcularPagamento());
    }
}