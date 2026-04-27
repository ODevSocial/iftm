package org.iftm.gerenciadorveterinarios.repositories;

import java.util.List;

import org.iftm.gerenciadorveterinarios.entities.Veterinario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VeterinarioRepository extends JpaRepository<Veterinario, Integer> {

    // 1
    List<Veterinario> findByNome(String nome);

    List<Veterinario> findByNomeIgnoreCase(String nome);

    // 2
    List<Veterinario> findByNomeContaining(String nome);

    // 3
    List<Veterinario> findBySalarioGreaterThan(Double salario);

    List<Veterinario> findBySalarioLessThan(Double salario);

    List<Veterinario> findBySalarioBetween(Double min, Double max);

   
}
