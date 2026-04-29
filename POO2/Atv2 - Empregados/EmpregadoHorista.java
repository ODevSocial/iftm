public class EmpregadoHorista extends Empregado {
    private double salarioHora;
    private double horasTrabalhadas;

    public EmpregadoHorista(String nome, String sobrenome, String numeroSeguroSocial, double salarioHora,
            double horasTrabalhadas) {
        super(nome, sobrenome, numeroSeguroSocial);
        setSalarioHora(salarioHora);
        setHorasTrabalhadas(horasTrabalhadas);
    }

    public double getSalarioHora() {
        return salarioHora;
    }

    public void setSalarioHora(double salarioHora) {
        this.salarioHora = Math.max(salarioHora, 0.0);
    }

    public double getHorasTrabalhadas() {
        return horasTrabalhadas;
    }

    public void setHorasTrabalhadas(double horasTrabalhadas) {
        this.horasTrabalhadas = (horasTrabalhadas >= 0.0 && horasTrabalhadas <= 168.0) ? horasTrabalhadas : 0.0;
    }

    @Override
    public double calculaPagamento() {
        if (horasTrabalhadas <= 40) {
            return salarioHora * horasTrabalhadas;
        } else {
            return 40 * salarioHora + (horasTrabalhadas - 40) * salarioHora * 1.5;
        }
    }

    @Override
    public String toString() {
        return String.format("Empregado Horista: %s %s\n%s\nValor por Hora: $%.2f; Horas Trabalhadas: %.2f",
                getNome(), getSobrenome(), super.toString(), salarioHora, horasTrabalhadas);
    }
}