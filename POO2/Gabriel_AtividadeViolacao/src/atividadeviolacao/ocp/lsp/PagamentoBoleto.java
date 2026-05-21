package atividadeviolacao.ocp.lsp;

public class PagamentoBoleto implements EstrategiaPagamento {
    private final ContaPagadora conta;
    private final double valor;

    public PagamentoBoleto(ContaPagadora conta, double valor) {
        this.conta = conta;
        this.valor = valor;
    }

    @Override
    public void ejecutar() {
        conta.pagarBoleto(valor);
    }
}