Rails.application.routes.draw do

  devise_for :users
  root to: 'posts#index'
  resources :posts
  #get 'all' => 'posts#all'
  get 'send_letter' => 'admin#send_letter', as: 'send_letter'
  post 'sent' => 'admin#sent', as: 'sent'

end
