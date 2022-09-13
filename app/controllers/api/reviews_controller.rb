class Api::Reviews < ApplicationController

  def create
  end

  def destroy
  end

  def update
  end

  def show
    
  end

  private
  def review_params
    params.require(:review).permit(:user_id,:title,:content,:item_id,:rating)
  end
end