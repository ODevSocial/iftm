package br.com.empresa;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class FuncionarioTerceirizadoTest {

// despesas

    @Test
    void despesasAcimaLimiteGeraErro() {
        FuncionarioTerceirizado f =
                new FuncionarioTerceirizado("Ana", 100, 20, 500);

        Exception ex = assertThrows(IllegalArgumentException.class,
                () -> f.setDespesasAdicionais(1500));

        assertEquals("Despesas adicionais não podem ultrapassar 1000.", ex.getMessage());
    }

    @Test
    void despesasValidaFunciona() {
        FuncionarioTerceirizado f =
                new FuncionarioTerceirizado("Ana", 100, 20, 500);

        f.setDespesasAdicionais(800);

        assertEquals(800, f.calcularPagamento() - (100 * 20) / 1.1, 100); // simples validação indireta
    }

    // pagamento

    @Test
    void pagamentoComBonusFunciona() {
        FuncionarioTerceirizado f =
                new FuncionarioTerceirizado("Ana", 100, 20, 500);

        double esperado = 2000 + (500 * 1.1);

        assertEquals(esperado, f.calcularPagamento());
    }

    @Test
    void pagamentoAcimaLimiteGeraErro() {
        FuncionarioTerceirizado f =
                new FuncionarioTerceirizado("Ana", 160, 60, 1000);

        Exception ex = assertThrows(IllegalArgumentException.class,
                f::calcularPagamento);

        assertEquals("Pagamento deve estar entre 1518.00 e 10000.00.", ex.getMessage());
    }
}