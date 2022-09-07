json.categories do
  @collections.each do |col| 
    json.set! col.categories.ids
    json.extract! col.categories :id, :name
  end
end
json.collections do
      @collections.each do |col|
        json.set! col.id do
          json.extract! col, :id, :name
          json.category_ids col.category_ids

        end
      end
end

#json.collections

