class BossesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
wrap_parameters format: []

    def index
        render json: Boss.all
    end

    def show
        boss = find_boss
        render json: boss
    end

    def update
        boss = find_boss
        if boss
            boss.update(boss_params)
            render json: boss, status: :ok
        else
            render json: {error: "Boss not found"}, status: :not_found
        end
    end

    def create
        boss = Boss.create(boss_params)
        render json: boss, status: :created
    end

    def destroy
        boss = find_boss
        if boss
            boss.destroy
            render json: {}
        else
            render json: {error: "Boss not found"}, status: :not_found
        end
    end

    private

    def boss_params
        params.permit(:name, :location, :image_url, :killcount)
    end

    def find_boss
        Boss.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "Not Found"}, status: :not_found
    end
end

