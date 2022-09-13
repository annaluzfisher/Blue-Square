class Api::CollectionsController < ApplicationController

  def index
    @collections = Collection.all.includes(:items)
    render :index
  end

end

##for items. remember to check how many times higttin db