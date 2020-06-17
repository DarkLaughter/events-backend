class EventsController < ApplicationController

    def index
        @events = Event.all.sort_by{|event| event.date}
         render json: @events
     end

     def update
        event = Event.find(params[:id])
         byebug
     end
end
