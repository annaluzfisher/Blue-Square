Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :create ]
   resource :session, only: [ :show, :create, :destroy ]
   get '*path', to: 'static_pages#frontend_index'
  end
end
