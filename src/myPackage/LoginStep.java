package myPackage;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	
	/*
	Given: launch the application
	When: user enters valid username and password
	And: clicks on login button
	Then: user logged into the application*/
	
	@Given("launch the application")
	public void launch_the_application(){
		
		System.out.println("launch the application>>>>>");
		
	}

	@When("^user enters ([a-zA-Z]{1,}) username and password$")
	public void user_enters_valid_username_and_password(String status, DataTable data){
		System.out.println("user enters valid uname and pwd>>>>>");
		System.out.println("user enters "+status+"username and password");
		
		
		List<Map<String, String>> list =
				data.asMaps(String.class, String.class);
		//for String(temp..list)
		for(Map<String, String> temp:list){
		System.out.println("**Values from data table**");
		System.out.println("UserName: "+temp.get("userName"));
		System.out.println("Password: "+temp.get("password"));
		if (temp.get("level")!=null){
		System.out.println("Level: "+temp.get("level"));
		}
		}
	}
	
	@And("clicks on login button")
	public void clicks_on_login_button(){
		System.out.println("click on login button>>>>>");	
	}

	@Then("user logged into the application")
	public void user_logged_into_the_application(){
		System.out.println("user logged into the application>>>>>");
	}
	
	//When user enters valid username and Invalidpassword
	//Then user get login Failed error
	
	@When("user enters valid username and Invalidpassword")
	public void user_enters_valid_username_and_Invalidpassword(){
		System.out.println("Invalid password");
	}
	@Then("user get login Failed error")
	public void user_get_login_Failed_error(){
		System.out.println("Please enter valid password");
	}
}
