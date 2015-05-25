Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'pages/AboutUS' => 'pages#AboutUS'

  get 'pages/Franchisee' => 'pages#Franchisee'

  get 'pages/FranchiseeFAQ' => 'pages#FranchiseeFAQ'

  get 'pages/LegalAdvice' => 'pages#LegalAdvice'

  root to: 'visitors#index'
end
