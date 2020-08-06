Rails.application.routes.draw do
  root 'sawa_sawa#index'
  resources :sawa_sawa, only: [:index] do
    collection do
      get 'profile'
    end
  end

end
