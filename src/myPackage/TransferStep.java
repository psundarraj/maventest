package myPackage;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class TransferStep {

	@Given("^\"([a-zA-Z]{1,})\" source account number$")
	public void source_account_number(String srcStatus) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(srcStatus + "acc NUmber");
	    //throw new PendingException();
	}

	@Given("^\"([a-zA-Z]{1,})\" receiptent account number$")
	public void receiptent_account_number(String destStatus) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		System.out.println(destStatus + "Target NUmber");
	}

	@Given("^with \"([^\"]*)\" balance$")
	public void with_balance(String balance_status) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(balance_status + "balance status");
	    //throw new PendingException();
		
		
	}

	@Then("^\"([a-zA-Z]{1,})\" the amount$")
	public void the_amount(String transfer_status) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println(transfer_status + "Status of the transfer");
	   // throw new PendingException();
	}

}
