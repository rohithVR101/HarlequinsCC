package com.road.quinscc.membersservice.service;

import com.road.quinscc.membersservice.data.MemberEntity;
import com.road.quinscc.membersservice.repository.MembersRepository;
import com.road.quinscc.membersservice.shared.MemberDTO;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MembersServiceImpl implements MembersService {

    MembersRepository membersRepository;
    BCryptPasswordEncoder bCryptPasswordEncoder;
    ModelMapper modelMapper;

    @Autowired
    public MembersServiceImpl(MembersRepository membersRepository, BCryptPasswordEncoder bCryptPasswordEncoder, ModelMapper modelMapper) {
        this.membersRepository = membersRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.modelMapper = modelMapper;
        this.modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MemberEntity memberEntity = membersRepository.findByUserName(username);
        if (memberEntity == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(memberEntity.getUserName(), memberEntity.getPassword(), true, true, true, true, new ArrayList<>());
    }

    @Override
    public void createMember(MemberDTO memberDetails) {
        MemberEntity memberEntity = convertMemberDTOToMemberEntity(memberDetails);
        memberEntity.setPassword(bCryptPasswordEncoder.encode(memberDetails.getPassword()));
        membersRepository.save(memberEntity);
    }

    @Override
    public MemberDTO findByUserName(String userName) {
        MemberEntity memberEntity = membersRepository.findByUserName(userName);
        if (memberEntity == null) {
            throw new UsernameNotFoundException(userName);
        }
        return convertMemberEntityToMemberDTO(memberEntity);
    }

    @Override
    public MemberDTO findByEmail(String email) {
        MemberEntity memberEntity = membersRepository.findByEmail(email);
        if (memberEntity == null) {
            throw new UsernameNotFoundException(email);
        }
        return convertMemberEntityToMemberDTO(memberEntity);
    }

    @Override
    public MemberDTO findByPhoneNumber(String phoneNumber) {
        MemberEntity memberEntity = membersRepository.findByEmail(phoneNumber);
        if (memberEntity == null) {
            throw new UsernameNotFoundException(phoneNumber);
        }
        return convertMemberEntityToMemberDTO(memberEntity);
    }

    @Override
    public Iterable<MemberDTO> findAll() {
        List<MemberDTO> members = new ArrayList<>();
        membersRepository.findAll().forEach(memberEntity -> members.add(convertMemberEntityToMemberDTO(memberEntity)));
        return members;
    }

    private MemberEntity convertMemberDTOToMemberEntity(MemberDTO memberDetails) {
        return modelMapper.map(memberDetails, MemberEntity.class);
    }

    private MemberDTO convertMemberEntityToMemberDTO(MemberEntity memberDetails) {
        return modelMapper.map(memberDetails, MemberDTO.class);
    }
}
