json.item do 
  json.extract! @item, :id, :name, :description, :price, :discount, :image_url, :size
  json.review_ids @item.review_ids
   json.average @item.average
   json.user_ids @item.reviewers
end

json.reviews do
  @item.reviews.each do |review|
    json.set! review.id do
    json.extract! review, :id, :title, :content, :title, :rating, :created_at,:user_id,:name
    json.user_name review.name ? review.name : (review.user.first_name + " " + review.user.last_name[0])
  
    end
  end
end