package contaBancaria;

public class ContaPoEstudantil extends ContaPo {
    private double limiteIsencaoTaxa;

    public ContaPoEstudantil(String titular, double saldoInicial, double taxaRendimento, double limiteIsencaoTaxa) {
        super(titular, saldoInicial, taxaRendimento);
        this.limiteIsencaoTaxa = limiteIsencaoTaxa;
    }

    @Override
    public boolean sacar(double valor) {
        return super.sacar(valor);
    }

    public String exibeLimiteIsencao() {
        return String.format("Limite de isenção de taxa para estudantes: R$ %.2f", limiteIsencaoTaxa);
    }
}