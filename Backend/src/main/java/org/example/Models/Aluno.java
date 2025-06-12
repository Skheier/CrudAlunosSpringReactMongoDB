package org.example.Models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@ToString
@Builder
@Document
@Getter @Setter
public class Aluno {
    @Id private String id;
    private String nome;
    private String telefone;
    @NotBlank
    @Email
    private String email;
    private String endereco;

}

