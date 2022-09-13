# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :decimal(, )      not null
#  discount    :decimal(, )      default(0.0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#  size        :boolean          default(FALSE)
#
class Item < ApplicationRecord
  validates :name, :description, :price, presence: true
  has_many :reviews, dependent: :destroy

end
