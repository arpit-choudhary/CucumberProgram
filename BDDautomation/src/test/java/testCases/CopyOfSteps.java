package testCases;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class CopyOfSteps {
	ChromeDriver driver;
	@Given("^User is on the Login page$")
	public void User_is_on_the_Login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver","./Drivers/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.facebook.com");
	  
	}

	@When("^user enters username$")
	public void User_enters_username() throws Throwable {
	   driver.findElementById("email").sendKeys("hello");
	}

	@When("^user enters password$")
	public void User_enters_password() throws Throwable {
		 driver.findElementById("pass").sendKeys("hello");
		 driver.close();
	  
	}

	@When("^User clicks on sigin button$")
	public void User_clicks_on_sigin_button() throws Throwable {
	   
	}

	@Then("^User should be logged in$")
	public void User_should_be_logged_in() throws Throwable {
	  
	}

	@When("^User enters incorrect username$")
	public void User_enters_incorrect_username() throws Throwable {
	    
	}

	@When("^User enters incorrect password$")
	public void User_enters_incorrect_password() throws Throwable {
	    
	}
	
	@When("^User enters incorrect username \"([^\"]*)\"$")
	public void User_enters_incorrect_username(String user) throws Throwable {
		 driver.findElementById("email").sendKeys(user);
	}

	@When("^User enters incorrect password \"([^\"]*)\"$")
	public void User_enters_incorrect_password(String password) throws Throwable {
		driver.findElementById("pass").sendKeys(password);
		driver.close();
	}

	@Then("^User should not be logged in$")
	public void User_should_not_be_logged_in() throws Throwable {
	   
	}
	//Multiple parameters method below
	@When("^User clicks on sigin button \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void User_clicks_on_sigin_button(String arg1, String arg2, String arg3) throws Throwable {
	   
	}
}
