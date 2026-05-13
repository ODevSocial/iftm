public class Validacao {
    
    public static boolean validarCpf(String cpf) {
        if (cpf == null || cpf.length() != 11) {
            return false;
        }
        return cpf.matches("\\d{11}");
    }

    public static void validarValorPositivo(double valor) throws CalculaInvalidoException {
        if (valor < 0) {
            throw new CalculaInvalidoException("Valor negativo inválido: " + valor);
        }
    }
}