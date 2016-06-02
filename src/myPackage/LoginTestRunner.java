package myPackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/mypackage",
		plugin={"pretty", "html:target/cucumber-html-report"},
		tags={"@Sanity,@Smoke"}
		)

public class LoginTestRunner extends AbstractTestNGCucumberTests{}

	
	

