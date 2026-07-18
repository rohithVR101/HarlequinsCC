package com.road.quinscc.parkingservice.repository;

import com.road.quinscc.parkingservice.model.ParkedVehicle;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ParkedVehicleRepository extends MongoRepository<ParkedVehicle,Integer> {
}

