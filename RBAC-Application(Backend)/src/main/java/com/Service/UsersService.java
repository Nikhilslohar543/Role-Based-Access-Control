package com.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.DAO.UsersDao;
import com.Entity.Users;

@Service
public class UsersService {

	@Autowired
	private UsersDao dao;

	public List<Users> getAllUsers() {

		return dao.findAll();
	}

	public ResponseEntity<?> getUserById(int id) {

		Optional<Users> user = dao.findById(id);

		if (user != null) {
			return ResponseEntity.ok(user.get());
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found!!");
	}

	public ResponseEntity<?> updateUser(int id, Users user) {

		Optional<Users> existingUserOpt = dao.findById(id);

		if (existingUserOpt.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found!");
		} else {

			Users existingUser = existingUserOpt.get();

			existingUser.setFirstname(user.getFirstname());
			existingUser.setLastname(user.getLastname());
			existingUser.setEmailid(user.getEmailid());
			existingUser.setUsername(user.getUsername());
			existingUser.setPassword(user.getPassword());
			existingUser.setRole(user.getRole());
			existingUser.setPermission(user.getPermission());
			existingUser.setStatus(user.getStatus());
			
			dao.save(existingUser);
			return ResponseEntity.ok("User updated successfully!");
		}
	}

	public ResponseEntity<?> addUser(Users user) {

		Users existingUser = dao.findByUsername(user.getUsername());

		if (existingUser != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("Username is already taken, choose a different username!");
		} else {

			dao.save(user);

			return ResponseEntity.ok("New user added successfully");

		}
	}

	public ResponseEntity<?> deleteUser(int id) {

		Optional<Users> user = dao.findById(id);

		Users user1 = user.get();

		if (user.isPresent()) {

			dao.delete(user1);
			return ResponseEntity.ok("User deleted successfully");

		} else {

			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found!");

		}
	}

}
