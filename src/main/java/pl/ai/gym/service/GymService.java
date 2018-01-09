package pl.ai.gym.service;
import pl.ai.gym.model.Gym;
import java.util.List;

/**
 * Created by Łukasz Klimowicz.
 */


public interface GymService {
    public List<Gym> findAll();
}