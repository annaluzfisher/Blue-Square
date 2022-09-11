json.cart do 
  # debugger
  json.extract! @cart, :id
    json.cart_item_ids @cart.cart_item_ids
end