Rails.application.routes.draw do
  resources :users, only:[:show, :create]
  
  resources :bosses, only: [:index, :show, :update, :create, :destroy] do 
    resources :items, only: [:index, :show, :update, :create, :destroy]
  end

  resources :items, only: [:index, :show, :update, :create, :destroy]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
