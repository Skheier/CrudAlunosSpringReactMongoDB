package org.example.Services;

import org.assertj.core.api.Assertions;
import org.example.Models.Aluno;
import org.example.Repositories.AlunoRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class AlunoServiceTest {

    @Mock
    private AlunoRepository alunoRepository;

    @InjectMocks
    private AlunoService alunoService;

    @Test
    public void newAlunoServiceTEST(){
        Aluno alunum = Aluno.builder().nome("Maicon").telefone("133314422").email("MiconDe@uniara.com").endereco("Rua tavares").build();
        when(alunoRepository.save(Mockito.any(Aluno.class))).thenReturn(alunum);

        Aluno savedAluno = alunoService.saveAluno(alunum);

        Assertions.assertThat(savedAluno).isNotNull();
        System.out.println("\nAluno Salvo...\n" +savedAluno + "\n");
    }
    @Test
    public void getAllAlunosServiceTEST(){

        Mockito.when(alunoRepository.findAll()).thenReturn( mockGetAll() );
        List<Aluno> actual = alunoService.allAlunos();

        Assertions.assertThat(actual).isNotNull();
        System.out.println("All Alunos...\n"+actual+ "\n");
    }

    private List<Aluno> mockGetAll(){
        Aluno alunum = Aluno.builder().nome("Maicon").telefone("133314422").email("MiconDe@uniara.com").endereco("Rua tavares").build();
        Aluno aludois = Aluno.builder().nome("Laura").telefone("8812112").email("laMauro@uniara.com").endereco("Alberto Campos 1282").build();
        Aluno alutres = Aluno.builder().nome("Janaina").telefone("167739212").email("JainaSuzan@uniara.com").endereco("Sao Marmeiro do rio a dentro").build();
        List<Aluno> returndList = List.of(alunum, aludois, alutres);
        return returndList;
    }


}
