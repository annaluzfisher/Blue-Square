json.user do 
  json.extract! @user, :id, :email, :first_name, :last_name, :company_name
end