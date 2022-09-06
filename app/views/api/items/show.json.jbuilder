json.item do 
  json.extract! @item, :id, :name, :description, :price, :discount 
end