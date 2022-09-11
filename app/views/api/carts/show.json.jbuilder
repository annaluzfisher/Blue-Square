json.cart do 
  # debugger
  json.extract! @cart, :id
    # json.cart_item_ids @cart.cart_item_ids
    json.cart_items @cart.cart_items
end