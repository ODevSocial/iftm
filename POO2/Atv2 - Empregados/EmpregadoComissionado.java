public class EmpregadoComissionado extends Empregado {
    private double vendasBrutasSemanais;
    private double taxaComissao;

    public EmpregadoComissionado(String nome, String sobrenome, String numeroSeguroSocial, double vendasBrutasSemanais,
            double taxaComissao) {
        super(nome, sobrenome, numeroSeguroSocial);
        setVendasBrutasSemanais(vendasBrutasSemanais);
        setTaxaComissao(taxaComissao);
    }

    public double getVendasBrutasSemanais() {
        return vendasBrutasSemanais;
    }

    public void setVendasBrutasSemanais(double vendasBrutasSemanais) {
        this.vendasBrutasSemanais = Math.max(vendasBrutasSemanais, 0.0);
    }

    public double getTaxaComissao() {
        return taxaComissao;
    }

    public void setTaxaComissao(double taxaComissao) {
        this.taxaComissao = (taxaComissao > 0.0 && taxaComissao < 1.0) ? taxaComissao : 0.0;
    }

    @Override
    public double calculaPagamento() {
        return getTaxaComissao() * getVendasBrutasSemanais();
    }

    @Override
    public String toString() {
        return String.format("Empregado Comissionado: %s %s\n%s\nVendas Brutas Semanais: $%.2f; Taxa da Comissão: %.2f",
                getNome(), getSobrenome(), super.toString(), vendasBrutasSemanais, taxaComissao);
    }
}