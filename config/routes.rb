Rails.application.routes.draw do
  resources :tickets, only: [:index, :show, :create, :update, :destroy]
  resources :events, only: [:index, :show, :create, :update, :destroy]
  get '/events/search', to: 'events#search', as: 'search_events'
  resources :users, only: [:index, :show, :create, :update, :destroy]
   
end
