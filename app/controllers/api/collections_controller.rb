class Api::CollectionsController < ApplicationController

  def index
    @collections = Collection.all
    render :index
  end

  #view with jbuilder



end
