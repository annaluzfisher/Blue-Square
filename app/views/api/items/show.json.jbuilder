json.item do 
  json.extract! @item, :id, :name, :description, :price, :discount, :image_url, :size
  json.review_ids @item.review_ids
end

json.reviews do
  @reviews.each do |review|
    json.set! review.id do
    json.extract! review, :id, :title, :content, :title, :rating, :created_at
    json.user_name review.user.first_name 
    end
  end
end