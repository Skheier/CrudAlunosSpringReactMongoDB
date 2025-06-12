package org.example.Models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
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
    @Email
    @NotBlank
    private String email;
    private String endereco;

}

