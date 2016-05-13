class ApplicationController < ActionController::Base

  before_action :authenticate_user!
  protect_from_forgery with: :exception

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) do |u|
     u.permit(:email, :password, :password_confirmation) 
  end
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:password, :remember_me) }
  end

end
