package pl.ai.gym.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
/**
 * Created by Łukasz Klimowicz.
 */

@Entity
@Table(name = "PERSONAL_TRAINER")
@Getter
@Setter
@NoArgsConstructor

public class PersonalTrainer {
    @Id
    @Column(name ="ID_PERSONAL_TRAINER")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer trainerId;

    @Column(name ="NAME")
    private String trainerName;

    @Column(name ="SURNAME")
    private String trainerSurname;

    @Column(name ="PHONE")
    private String trainerPhone;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ID_GYM")
    private Gym gym;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ID_CLIENT")
    private Client client;
}