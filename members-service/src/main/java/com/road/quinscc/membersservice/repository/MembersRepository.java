package com.road.quinscc.membersservice.repository;

import com.road.quinscc.membersservice.data.MemberEntity;
import org.springframework.data.repository.CrudRepository;

public interface MembersRepository extends CrudRepository<MemberEntity, Long> {

    MemberEntity findByUserName(String userName);
    MemberEntity findByEmail(String email);
    MemberEntity findByPhoneNumber(String phoneNumber);
}
