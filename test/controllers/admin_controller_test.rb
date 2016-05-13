require 'test_helper'

class AdminControllerTest < ActionController::TestCase
  test "should get send_letter" do
    get :send_letter
    assert_response :success
  end

end
