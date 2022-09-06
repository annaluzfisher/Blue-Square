json.item do 
  json.extract! @item, :id, :description, :price, :discount 
end