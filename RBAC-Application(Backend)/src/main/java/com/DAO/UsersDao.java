package com.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Entity.Users;

@Repository
public interface UsersDao extends JpaRepository<Users, Integer>{
	
	Users findByUsername(String username);

}
