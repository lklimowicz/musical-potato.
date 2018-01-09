package pl.ai.gym.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;


/**
 * Created by Łukasz Klimowicz.
 */

@Entity
@Table(name = "KLIENT")
@Getter
@Setter
@NoArgsConstructor

public class Client {
        @Id
        @Column(name ="ID_CLIENT")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer clientId;

        @Column(name ="NAME")
        private String clientName;

        @Column(name ="SURNAME")
        private String clientSurname;

        @Column(name ="PHONE")
        private String clientPhone;

    }

