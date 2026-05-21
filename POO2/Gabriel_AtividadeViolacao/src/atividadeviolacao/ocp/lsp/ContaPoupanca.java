package atividadeviolacao.ocp.lsp;

public class ContaPoupanca implements Conta {
    private double saldo;

    public ContaPoupanca(double saldo) {
        this.saldo = saldo;
    }

    @Override
    public double getSaldo() {
        return this.saldo;
    }

    @Override
    public void sacar(double valor) {
        this.saldo -= valor;
    }
}