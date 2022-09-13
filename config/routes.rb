Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :items, only: [ :show ] #nest reviews under here
    resources :carts, only: [ :create,:show ]
    
    resources :cart_items, only: [:create, :update, :destroy ]
    resources :users, only: [ :create ] 
    resources :collections, only: [:index] 
   resource :session, only: [ :show, :create, :destroy ]
   get '*path', to: 'static_pages#frontend_index'
  end
end

//
