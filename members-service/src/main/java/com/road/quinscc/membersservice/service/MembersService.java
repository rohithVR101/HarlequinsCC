package com.road.quinscc.membersservice.service;

import com.road.quinscc.membersservice.shared.MemberDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface MembersService extends UserDetailsService {
    public void createMember(MemberDTO memberDTO);

    public Iterable<MemberDTO> findAll();

    MemberDTO findByUserName(String userName);

    MemberDTO findByEmail(String email);

    MemberDTO findByPhoneNumber(String phoneNumber);
}
