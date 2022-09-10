# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord

  belongs_to :user
end
