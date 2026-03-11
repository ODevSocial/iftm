package contaBancaria;

public class ContaCoEmpresarial extends ContaCo {
    private double taxaJurosEmprestimo;

    public ContaCoEmpresarial(String titular, double saldoInicial, double limiteChequeEspecial, double taxaJurosEmprestimo) {
        super(titular, saldoInicial, limiteChequeEspecial);
        this.taxaJurosEmprestimo = taxaJurosEmprestimo;
    }

    public boolean solicitaEmprestimo(double valor) {
        if (valor <= saldo + limiteChequeEspecial) {
            saldo += valor;
            return true;
        }
        return false;
    }

    @Override
    public String exibeSaldo() {
        return String.format("Saldo da conta empresarial de %s: R$ %.2f", titular, saldo);
    }
}