# == Schema Information
#
# Table name: collection_categories
#
#  id             :bigint           not null, primary key
#  collections_id :bigint
#  categories_id  :bigint
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class CollectionCategory < ApplicationRecord
  belongs_to :category 
  belongs_to :collection
end
