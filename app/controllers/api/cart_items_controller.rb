class Api::CartItemsController < ApplicationController
  def index
  end

  def update
  end

  def create
    debugger
    @cart_item = CartItem.new(user_id: params[:user_id], item_id: params[:item_id])
  end

  def destroy
  end

end