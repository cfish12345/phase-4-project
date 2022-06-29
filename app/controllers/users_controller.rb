class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        render json: user
    end

    def show
        current_user = User.find(session[:user_id])
        if current_user
            render json: current_user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
