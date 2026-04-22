package progInterface;

public class ContaCorrente implements Conta {
    private double saldo;
    private double taxa;

    public ContaCorrente(double taxa) {
        this.saldo = 0;
        this.taxa = taxa;
    }

    @Override
    public void depositar (double valor) {
        saldo += valor;
    }

    @Override
    public void sacar (double valor) {
        double valorComTaxa = valor + taxa;

        if (valorComTaxa <= saldo) {
            saldo -= valorComTaxa;
        } else {
            System.out.println("Saldo insuficiente");
        }
    }

    @Override
    public double getSaldo() {
        return saldo;
    }
    
}
