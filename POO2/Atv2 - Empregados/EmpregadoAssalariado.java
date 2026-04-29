public class EmpregadoAssalariado extends Empregado {
    private double salarioSemanal;

    public EmpregadoAssalariado(String nome, String sobrenome, String numeroSeguroSocial, double salarioSemanal) {
        super(nome, sobrenome, numeroSeguroSocial);
        setSalarioSemanal(salarioSemanal);
    }

    public double getSalarioSemanal() {
        return salarioSemanal;
    }

    public void setSalarioSemanal(double salarioSemanal) {
        this.salarioSemanal = Math.max(salarioSemanal, 0.0);
    }

    @Override
    public double calculaPagamento() {
        return getSalarioSemanal();
    }

    @Override
    public String toString() {
        return String.format("Empregado Assalariado: %s %s\n%s\nSalário Semanal: $%.2f",
                getNome(), getSobrenome(), super.toString(), salarioSemanal);
    }
}