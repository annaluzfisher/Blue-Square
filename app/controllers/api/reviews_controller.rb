class Api::ReviewsController < ApplicationController

  def create
    debugger
    @review = Review.new(review_params)
    if @review.save!
      render json: 'succes'
    else
       render "api/errors/internal_server_error", status: :internal_server_error
    end
  end


  ## {"review"=>{"title"=>"A good set", "rating"=>4, "content"=>"Pretty happy with this set, although I think I prefer liquid chalk actually. Not a bad combo though! ", "name"=>"Josh F."}}
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