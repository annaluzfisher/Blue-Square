class Api::ItemsController < ApplicationController

  def show
    # debugger
    @item = Item.find_by(id: params[:id])
    # @reviews = Review.where(item_id: params[:id])
    render :show
  end

end