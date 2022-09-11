class Api::CartsController < ApplicationController


  def show
    # debugger
  
       @cart = Cart.find(params[:id])
       if @cart
        render :show
       else
        render "api/errors/internal_server_error", status: :internal_server_error
       end
  end

  def update
  end

  def create
    # debugger
    @cart = Cart.new(user_id: params[:user][:user][:id])
    if @cart.save!
        render  :show
     else
      render "api/errors/internal_server_error", status: :internal_server_error
     end
  end

  def destroy
  end




end
