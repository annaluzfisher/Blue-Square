
# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  parent_id  :bigint
#
class Category < ApplicationRecord
  has_many :collection_categories,  foreign_key: :categories_id, dependent: :destroy
  #has_many :category_items
  #has_many :items, through: category_items, source: Items
end
