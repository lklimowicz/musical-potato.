package pl.ai.gym.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.ai.gym.model.Gym;

import pl.ai.gym.repository.GymRepository;
import java.util.List;

/**
 * Created by Łukasz Klimowicz
 */

@Service
public class GymServiceImplementation implements GymService {

    @Autowired
    private GymRepository gymRepository;

    @Override
    public List<Gym> findAll() {
        return gymRepository.findAll();
    }
}
}
