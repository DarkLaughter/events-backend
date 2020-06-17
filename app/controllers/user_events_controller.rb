class UserEventsController < ApplicationController

    def index
        @users = UserEvent.all 
        render json: @users
    end

    def show
        event = UserEvent.find(params[:id])
        render json: event
    end
end
