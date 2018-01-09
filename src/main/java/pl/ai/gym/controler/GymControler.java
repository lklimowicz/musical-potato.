package pl.ai.gym.controler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.ai.gym.model.Gym;
import pl.ai.gym.service.GymService;
import java.util.List;
/**
 * Created by Łukasz Klimowicz.
 */

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GymControler {
    @Autowired
    private GymService gymService;

    @GetMapping(value = "/findGym")
    public List<Gym>findGym(){
        List<Gym> gyms = gymService.findAll();
        return gyms;
    }
}
