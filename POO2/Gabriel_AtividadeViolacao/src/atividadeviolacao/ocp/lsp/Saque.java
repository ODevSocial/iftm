package atividadeviolacao.ocp.lsp;

public class Saque implements EstrategiaPagamento {
    private final Conta conta;
    private final double valor;

    public Saque(Conta conta, double valor) {
        this.conta = conta;
        this.valor = valor;
    }

    @Override
    public void ejecutar() {
        conta.sacar(valor);
    }
}