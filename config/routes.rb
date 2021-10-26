Rails.application.routes.draw do
  root to: 'pages#home'
  resources :posts
  get 'about', to: 'contacts#about'
end
