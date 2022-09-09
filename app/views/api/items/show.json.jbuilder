json.item do 
  json.extract! @item, :id, :name, :description, :price, :discount, :image_url
end