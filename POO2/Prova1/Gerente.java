public class Gerente extends CargoEstrategico {

    private Departamento departamento;
    private Endereco endereco;

    public Gerente(String nome, double salarioBase, Departamento departamento, String logradouro) {
        super(nome, salarioBase);
        this.departamento = departamento;
        this.endereco = new Endereco(logradouro);
    }

    public Departamento getDepartamento() {
        return departamento;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    @Override
    public double calcularSalarioLiquido() throws CalculaInvalidoException {
        Validacao.validarValorPositivo(this.salarioBase);

        double bruto = this.salarioBase + (this.salarioBase * (this.kpiScore / 100.0));
        
        double imposto = (bruto > 7000) ? bruto * 0.275 : (bruto > 3000) ? bruto * 0.15 : 0;
        
        return bruto - imposto;
    }
}