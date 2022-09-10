Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :items, only: [ :show ] #nest reviews under here
    resources :carts, only: [ :create ]
    resources :users, only: [ :create ] do
      resources :carts, only: [ :show, :update, :destroy ]
    end
    resources :collections, only: [:index] 
   resource :session, only: [ :show, :create, :destroy ]
   get '*path', to: 'static_pages#frontend_index'
  end
end
