class Api::CollectionsController < ApplicationController

  def index
    @collections = Collections.all
    render json: @collections
  end


end
