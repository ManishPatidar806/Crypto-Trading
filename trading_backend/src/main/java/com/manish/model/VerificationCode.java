package com.manish.model;

import com.manish.domain.VERIFICATION_TYPE;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class VerificationCode {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String otp;

    @OneToOne
    private User user;
    private String email;
    private String mobile;
    private VERIFICATION_TYPE verificationType;





}
