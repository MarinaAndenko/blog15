class UserMailer < ApplicationMailer
  def send_to_email(user)
    @user = user
    mail(to: @user.email, subject: 'Hello Letter')
  end
end
