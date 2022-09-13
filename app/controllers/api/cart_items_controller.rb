class Api::CartItemsController < ApplicationController


  def update
   

    # debugger
    @cart_item = CartItem.find(params[:id])
    if @cart_item.update!(quantity: params[:quantity])
      render json: @cart_item
    else
            render "api/errors/internal_server_error", status: :internal_server_error
      end
   
  end
  
#params look like:  {"cart_item"=>{"itemId"=>54, "userId"=>1, "cartId"=>1, "size"=>"M", "quantity"=>1}}
  def create
    item_id =  params[:cart_item][:item_id]
    size = params[:cart_item][:size]
    quantity = params[:cart_item][:quantity]
    cart_id = params[:cart_item][:cart_id]
    # debugger
    
    check =  CartItem.where("size = ? AND item_id = ? AND cart_id = ?",size,item_id,cart_id)
      if check.length > 0
        @found_cart_item = check[0]
        @found_cart_item.quantity += quantity
       if  @found_cart_item.save!
        render json: @found_cart_item
       else
         render "api/errors/internal_server_error", status: :internal_server_error
                end
      elsif
           @cart_item = CartItem.new(item_id: item_id, size: size, quantity: quantity,cart_id: cart_id)
                  if @cart_item.save!
                  render json:  @cart_item
                else
                render "api/errors/internal_server_error", status: :internal_server_error
                end
      else
            render "api/errors/internal_server_error", status: :internal_server_error
      end
  end

  def destroy
    # debugger
    item = CartItem.find(params[:id])
    if item && item.delete
      render json: 'success'
    else
       render "api/errors/internal_server_error", status: :internal_server_error
    end
  end

end