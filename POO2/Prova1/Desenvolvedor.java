public class Desenvolvedor extends Operacional {

    public Desenvolvedor(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalarioLiquido() throws CalculaInvalidoException {
        Validacao.validarValorPositivo(this.salarioBase);

        // Adicional de 5%
        double bruto = this.salarioBase * 1.05;
        
        // Desconto de 11%
        double liquido = bruto - (bruto * 0.11);
        
        return liquido;
    }
}