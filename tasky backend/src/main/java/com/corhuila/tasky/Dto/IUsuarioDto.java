package com.corhuila.tasky.Dto;

import jakarta.validation.constraints.NotNull;

public interface IUsuarioDto {
    @NotNull
    String getEmail();
    String getPassword();
}
