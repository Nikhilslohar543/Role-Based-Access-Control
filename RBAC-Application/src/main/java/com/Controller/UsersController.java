package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Users;
import com.Service.UsersService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class UsersController {
	
	@Autowired
	private UsersService service; 
	
	@GetMapping("/users")
	public List<Users> getAllUsers(){
		
		return service.getAllUsers();
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id) {
		
		return service.getUserById(id);
		
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody Users user){
		
		return service.updateUser(id, user);
		
	}
	
	@PostMapping("/users")
	public ResponseEntity<?> addUser(@RequestBody Users user){
		
		return service.addUser(user);
		
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id){
		
		return service.deleteUser(id);
	}
	
}
