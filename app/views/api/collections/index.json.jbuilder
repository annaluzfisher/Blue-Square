json.categories do
  # debugger
  @collections.each do |col| 
    col.categories.each do |cat|
      json.set! cat.id do
      json.extract! cat, :id, :name, :parent_id
      end
    end
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

#.includes

