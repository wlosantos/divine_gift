require 'rails_helper'

RSpec.describe 'Home page', type: :system do
  before do
    driven_by(:rack_test)
  end

  it 'shows the home page content' do
    visit root_path

    expect(page).to have_content('Home#index')
    expect(page).to have_css('h1', text: 'Home#index')
    expect(page).to have_content('Find me in app/views/home/index.html.slim')
  end
end
