package com.corhuila.tasky.Dto;

import jakarta.validation.constraints.NotNull;

public interface IUsuarioDto {
    Long getId();
    @NotNull
    String getEmail();
    String getPassword();
}
