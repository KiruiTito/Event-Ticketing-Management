class UsersController < ApplicationController
    before_action :set_cors_headers
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
       user.role = Role.find_by(name: params[:role])
       if user.valid?
           user.update(user_params)
           render json: user
       else
           render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
       end
   end

 
   #post user
   def create
    user = User.new(user_params)
  
    # Check if a user with the same email or username already exists
    if User.exists?(email: user.email) || User.exists?(username: user.username)
      render json: { error: 'User with the same email or username already exists' }, status: :unprocessable_entity
      return
    end
  
    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
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
       params.require(:user).permit(:username, :email, :password) # Make sure :role_id is permitted
   end

   def find_user
       User.find(params[:id])
   end

   def record_not_found_response(exception)
       render json: { error: "User not found" }, status: :not_found
   end

   def set_cors_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end
  
end

