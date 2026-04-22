package gabriel_TipoGenerico;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Vetor<Pessoa> vetorPessoas = new Vetor<>(3);

        vetorPessoas.setElemento(0, new Pessoa("Maria Aparecida Lemos", "F", "Uberlândia"));
        vetorPessoas.setElemento(1, new Pessoa("Félix Moreira", "M", "Cuiabá"));
        vetorPessoas.setElemento(2, new Pessoa("Jander Pereira Borges", "M", "Juazeiro do Norte"));

        Vetor<Cidade> vetorCidades = new Vetor<>(4);

        vetorCidades.setElemento(0, new Cidade("Uruguaiana", "Uruguaianense", "Rio Grande do Sul"));
        vetorCidades.setElemento(1, new Cidade("Uberlândia", "Uberlandense", "Minas Gerais"));
        vetorCidades.setElemento(2, new Cidade("Cuiabá", "Cuiabano", "Mato Grosso"));
        vetorCidades.setElemento(3, new Cidade("Manaus", "Manauara", "Amazonas"));

        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o nome da pessoa: ");
        String nomeBusca = sc.nextLine();

        Pessoa pessoaEncontrada = null;
        Cidade cidadeEncontrada = null;

        // buscar pessoa
        for (int i = 0; i < vetorPessoas.getTamanho(); i++) {

            Pessoa p = vetorPessoas.getElemento(i);

            if (p.getNome().equalsIgnoreCase(nomeBusca)) {
                pessoaEncontrada = p;
                break;
            }
        }

        if (pessoaEncontrada != null) {

            // buscar cidade da pessoa
            for (int i = 0; i < vetorCidades.getTamanho(); i++) {

                Cidade c = vetorCidades.getElemento(i);

                if (c.getNome()
                        .equalsIgnoreCase(pessoaEncontrada.getNaturalidade())) {

                    cidadeEncontrada = c;
                    break;
                }
            }

            // se encontrou cidade no vetor
            if (cidadeEncontrada != null) {

                if (pessoaEncontrada.getSexo().equalsIgnoreCase("F")) {

                    System.out.println("A "
                            + cidadeEncontrada.getAdjetivo() + " "
                            + pessoaEncontrada.getNome()
                            + " nasceu em "
                            + cidadeEncontrada.getNome()
                            + " - "
                            + cidadeEncontrada.getEstado() + ".");

                } else {

                    System.out.println("O "
                            + cidadeEncontrada.getAdjetivo() + " "
                            + pessoaEncontrada.getNome()
                            + " nasceu em "
                            + cidadeEncontrada.getNome()
                            + " - "
                            + cidadeEncontrada.getEstado() + ".");
                }

            } else {
                // cidade não está cadastrada
                System.out.println(pessoaEncontrada.getNome()
                        + " nasceu em "
                        + pessoaEncontrada.getNaturalidade() + ".");
            }

        } else {
            // pessoa não está cadastrada
            System.out.println(nomeBusca
                    + " nasceu em cidade desconhecida.");
        }

        sc.close();
    }
};