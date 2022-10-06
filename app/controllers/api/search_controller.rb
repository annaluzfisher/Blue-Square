class Api::SearchController < ApplicationController

  def search
    # words = params[:query].split(' ')
    # debugger
    @items = Item.search_item(params[:query])
    render :results
  end

end