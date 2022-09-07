# == Schema Information
#
# Table name: collections
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  activity   :boolean          default(FALSE)
#
class Collection < ApplicationRecord
  has_many :collection_categories, dependent: :destroy
  #has__many :categories, through: collection_categories, source: Category
  #has_many :items, through: categories, source: items

end
