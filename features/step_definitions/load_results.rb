Given("I am at the website") do
  visit root_path
end

Given("Harry Potter is in the text field") do
  fill_in "search-field", with: "Harry Potter"
end

Given("robinsaver is in the text field") do
  fill_in "search-field", with: "robinsaver"
end

Given("ddhdjdhdjddrdrd is in the text field") do
  fill_in "search-field", with: "ddhdjdhdjddrdrd"
end

When("I click search") do
  click_on "search-button"
  sleep(2)
end

When("scroll to the bottom of the page") do
  page.execute_script "window.scrollBy(0,10000)"
  sleep(2)
end

Then("results should render") do
  first('.listing')
end

Then("loading result should appear") do
  expect(page).to have_content("Loading results...")
end


Then("no results for x should appear") do
  expect(page).to have_content("No results for ddhdjdhdjddrdrd")
end

Then("About 0 results should appear") do 
  expect(page).to have_content("About 0 results")
end


Then("more results should render") do
  expect(page).to have_content("The Ultimate Guide to the Harry Potter Fandom")
end

Then("loading more result should appear") do
  expect(page).to have_content("Loading more results...")
end

Then("no more results should appear") do
  expect(page).to have_content("No more results")
end

Then("specified title should appear") do
  expect(page).to have_content("Harry Potter and the Sorcerer's Stone")
end

Then("specified author should appear") do
  expect(page).to have_content("Book by J. K. Rowling")
end

Then("specified publisher_publishdate should appear") do
  expect(page).to have_content("Published by Arthur A. Levine Books - 2018")
end

Then("specified pagecount should appear") do
  expect(page).to have_content("pages")
end

Then("specified category should appear") do
  expect(page).to have_content("Juvenile Fiction")
end

Then("Amazon appear") do
  expect(page).to have_content("Amazon")
end

Then("Preview appear") do
  expect(page).to have_content("Preview")
end

Then("More Info appear") do
  expect(page).to have_content("More Info")
end




