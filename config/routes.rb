# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :email_search, only: [:create]
    end
  end

  root 'landing_page#index'
  get '/*path' => 'landing_page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
