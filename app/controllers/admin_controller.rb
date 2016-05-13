class AdminController < ApplicationController
  def send_letter
  end
  def sent
    redirect_to send_letter_path unless UserMailer.send_to_email(current_user).deliver_now
  end
end
