package pl.ai.gym.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
/**
 * Created by Łukasz Klimowicz.
 */

@Entity
@Table(name = "GYM")
@Getter
@Setter
@NoArgsConstructor

public class Gym {
    @Id
    @Column(name ="ID_GYM")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gymId;

    @Column(name ="Localization")
    private String gymLocalization;
}
