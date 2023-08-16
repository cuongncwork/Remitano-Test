Rails.application.routes.draw do
  post "login" => "session#login"
  get "get_user" => "session#get_user"

  resources :videos, only: [:index, :create]

  resources :votes, only: [:create, :update, :destroy]

  mount ActionCable.server => "/cable"
end
