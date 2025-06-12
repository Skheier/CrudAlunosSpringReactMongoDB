package org.example;

import org.assertj.core.api.Assertions;
import org.example.Models.Aluno;
import org.example.Services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;

public class Test {

   // @Autowired private AlunoService alunoService;

    @org.junit.jupiter.api.Test
    public void mainTest(){


        Aluno alunum = Aluno.builder().nome("Maicon").telefone("133314422").email("salvs@uniara.com").endereco("Rua tavares").build();

        //act
       // Aluno savedAluno = alunoService.saveAluno(alunum);
        System.out.println(alunum);

        //assert
        //Assertions.assertThat(savedAluno).isNotNull();

        //System.out.println(alunoService.allAlunos());

    }

}