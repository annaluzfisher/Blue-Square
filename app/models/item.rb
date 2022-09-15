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

  def average
    ratings = self.reviews.pluck(:rating)
  
  ratings.length == 0 ? 0 : (ratings.sum/reviews.length).round(1)
  end

  def reviewers
    self.reviews.pluck(:user_id)
  end
end
