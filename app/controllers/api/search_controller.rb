class Api::SearchController < ApplicationController

  def search5

    @items = Item.search_item(params[:query]).limit(5)
    render :results
  end

  def search
     @items = Item.deep_search(params[:query])
    render :results
  end

end