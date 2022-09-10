class Api::CartsController < ApplicationController


  def show
    debugger
      #  @user = User.find_by(session_token: session[:session_token])
       @cart = Cart.find(id: params[:id])
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
