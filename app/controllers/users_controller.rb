class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response


    # GET /users
   def index
       #get users
       render json: User.all, status: :ok
   end 
   
   

    # keep user login
    def show

       user = User.find_by(id: session[:user_id])
       if user
         render json: user
       else
         render json: { error: "Not authorized" }, status: :unauthorized
       end
     end


   #patch
   def update
       user = find_user
       if user.valid?
           user.update(user_params)
           render json: user
       else
           render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
       end
   end

 
   #post user
   def create
       user = User.create!(user_params)
       if user.valid?
         render json: user, status: :created
       else
           render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
       end
   end



  # DELETE
  def destroy
   # check whether the task exists
   user = User.find_by(id:params[:id])
  
  #  delete the task
  if user
      user.destroy
      head :no_content
  #  return a not found user
  else 
      render json: {error: 'User not found'}, status: not_found
  end
  end


   
   private

   def user_params
       params.permit(:username, :password, :email)
   end

   def find_user
       User.find(params[:id])
   end

   def record_not_found_response(exception)
       render json: { error: "User not found" }, status: :not_found
   end



end

