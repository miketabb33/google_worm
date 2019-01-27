Given("I am at the website") do
  visit root_path
end

Given("the textfield is not blank") do
  fill_in "search-field", with: "Harry Potter"
end

When("I click search") do
  sleep(2)
  click_on "search-button"
end

Then("results should render") do
  sleep(3)
  first('.listing')
end