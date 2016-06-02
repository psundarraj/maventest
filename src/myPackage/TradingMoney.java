package myPackage;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TradingMoney {
	
	@When("^user enters valid USDollars$")
	public void user_enters_valid_USDollars() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("$100");
	    //throw new PendingException();
	}

	@When("^clicks on trade button$")
	public void clicks_on_trade_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("click the Trade button");
	    //throw new PendingException();
	}

	@Then("^user get equavalent rupee$")
	public void user_get_equavalent_rupee() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("66000 is traded");
	   // throw new PendingException();
	}

}

