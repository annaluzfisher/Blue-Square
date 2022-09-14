json.collections do
      @collections.each do |col|
        json.set! col.id do
          json.extract! col, :id, :name, :image_url, :activity
          json.category_ids col.category_ids
          json.item_ids col.item_ids
        end
      end
end