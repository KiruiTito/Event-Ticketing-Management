class EventsController < ApplicationController
    before_action :set_cors_headers

    def index
        events = Event.all
        render json: events
    end
    
    def show
        event = Event.find_by(id: params[:id])
        if event
            render json: event
        else
            render json: {error: "Event not found"}, status: :not_found
        end
    end

    def create
        event = Event.create!(event_params)
        render json: event
    end 

    def update 
        event =  Event.find_by(id: params[:id])
        event.update(event_params)
        render json: event
    end 

    def destroy 
        event = Event.find_by(id: params[:id])
        event.destroy
        head :no_content
    end 

    def search
        category = params[:category]
    
        if category.present?
          events = Event.where(category: category)
        else
          events = Event.all
        end
    
        render json: events
      end
    

    private 
    def event_params 
        params.permit(:title, :image_url, :location, :category, :start_date, :end_date, :tickets_available)
    end 

    def set_cors_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      end
      
end
