import javax.swing.JOptionPane;

public class Teste {
    public static void main(String[] args) {
        StringBuilder relatorioSemPoli = new StringBuilder();
        relatorioSemPoli.append("Empregados Processados Individualmente:\n\n");

        EmpregadoAssalariado ea = new EmpregadoAssalariado("John", "Smith", "111-11-1111", 800.00);
        relatorioSemPoli.append(ea.toString()).append(String.format("\nTotal Ganho: $%.2f\n\n", ea.calculaPagamento()));

        EmpregadoHorista eh = new EmpregadoHorista("Karen", "Price", "222-22-2222", 16.75, 40.00);
        relatorioSemPoli.append(eh.toString()).append(String.format("\nTotal Ganho: $%.2f\n\n", eh.calculaPagamento()));

        EmpregadoComissionado ec = new EmpregadoComissionado("Sue", "Jones", "333-33-3333", 10000.00, 0.06);
        relatorioSemPoli.append(ec.toString()).append(String.format("\nTotal Ganho: $%.2f\n\n", ec.calculaPagamento()));

        EmpregadoMisto em = new EmpregadoMisto("Bob", "Lewis", "444-44-4444", 10000.00, 0.06, 300.00);
        relatorioSemPoli.append(em.toString()).append(String.format("\nTotal Ganho: $%.2f\n", em.calculaPagamento()));

        JOptionPane.showMessageDialog(null, relatorioSemPoli.toString(), "SEM POLIMORFISMO",
                JOptionPane.INFORMATION_MESSAGE);

        StringBuilder relatorioComPoli = new StringBuilder();
        relatorioComPoli.append("Empregados Processados Polimorficamente:\n\n");

        Empregado[] empregados = new Empregado[4];
        empregados[0] = ea;
        empregados[1] = eh;
        empregados[2] = ec;
        empregados[3] = em;

        for (Empregado empAtual : empregados) {
            relatorioComPoli.append(empAtual.toString()).append("\n");

            if (empAtual instanceof EmpregadoMisto) {
                EmpregadoMisto empMisto = (EmpregadoMisto) empAtual;
                double salarioBaseAntigo = empMisto.getSalarioBase();
                double novoSalarioBase = salarioBaseAntigo * 1.10;
                empMisto.setSalarioBase(novoSalarioBase);
                relatorioComPoli.append(
                        String.format("Novo Salário-base com 10%% de aumento é: $%.2f\n", empMisto.getSalarioBase())); //
            }

            relatorioComPoli.append(String.format("Total Ganho: $%.2f\n\n", empAtual.calculaPagamento()));
        }

        JOptionPane.showMessageDialog(null, relatorioComPoli.toString(), "COM POLIMORFISMO",
                JOptionPane.INFORMATION_MESSAGE);
    }
}