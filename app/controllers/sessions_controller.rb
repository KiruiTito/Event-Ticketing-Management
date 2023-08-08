class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
    
        if user && user.authenticate(params[:password])
          # Generate a JWT token or use sessions to manage the user's session
          # Return the token or session data to the frontend
          # Example using JWT:
          token = JWT.encode({ user_id: user.id }, Rails.application.secrets.secret_key_base)
          render json: { token: token, user: user }, status: :ok
        else
          render json: { error: "Invalid credentials" }, status: :unauthorized
        end
      end
    def destroy
        session.delete :user_id
        head :no_content
      end
end
