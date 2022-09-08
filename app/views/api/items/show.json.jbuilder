json.item do 
  json.extract! @item, :id, :name, :description, :price, :discount
  json.photo_url item.photo.url
end