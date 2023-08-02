class TicketsController < ApplicationController
    before_action :set_cors_headers

    def index
        tickets = Ticket.all
        render json: tickets
    end
    
    def show
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            render json: ticket
        else
            render json: {error: "Ticket not found"}, status: :not_found
        end
    end

    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket
    end 

    def update 
        ticket =  Ticket.find_by(id: params[:id])
        ticket.update(ticket_params)
        render json: ticket
    end 

    def destroy 
        ticket = Ticket.find_by(id: params[:id])
        ticket.destroy
        head :no_content
    end 

    private 
    def ticket_params 
        params.permit(:user_id, :event_id, :price, :status)
    end 

    def set_cors_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      end
      

end
