class ItemsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        if params[:boss_id]
            boss = Boss.find(params[:boss_id])
            items = boss.items
        else
            items = Item.all
        end
        render json: items, include: :boss, status: 200 
    end

    def show
        if params[:boss_id]
            boss = Boss.find(params[:boss_id]) 
            item = find_item
        else
            item = find_item
        end
        render json: item, include: :boss, status: :ok
    end

    def update
        if params[:boss_id]
            boss = Boss.find(params[:boss_id])
            item = find_item
            item.update(item_params)
        else
            render json: {error: "Boss not found"}, status: :not_found
        end
        render json: item, include: :boss, status: :ok
    end

    def create
        if params[:boss_id]
            boss = Boss.find(params[:boss_id])
            item = Item.create(item_params)
        else
            render json: {error: "instructor not found"}, status: :not_found
        end
            render json: item, status: :created
    end

    def destroy
        item = find_item
        if item
            item.destroy
            head :no_content
            render json: {}
        else
            render json: {error: "Boss not found"}, status: :not_found
        end
    end

    private

    def item_params
        params.permit(:title, :image_url, :rarity, :has_drop, :boss_id)
    end

    def find_item
        Item.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "Not Found"}, status: :not_found
    end
end
