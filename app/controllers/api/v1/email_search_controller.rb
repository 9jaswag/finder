# frozen_string_literal: true

class Api::V1::EmailSearchController < ApplicationController
  def index
    users = User.all.order(created_at: :desc)
    render json: json_response(nil, users), status: 200
  end

  def create
    email_formats = EmailFinder::EmailFormatsGenerator.new(email_search_params).call
    valid_email = EmailFinder::MailboxLayerService.new(email_formats).call

    if valid_email
      begin
        user = User.create!(first_name: email_search_params[:first_name],
                            last_name: email_search_params[:last_name],
                            email: valid_email)
      rescue ActiveRecord::ActiveRecordError => e
        render json: json_response(e.message), status: 400
        return
      end

      render json: json_response(nil, user), status: 201
    else
      render json: json_response('No valid email found.'), status: 404
    end
  end

  private

  def email_search_params
    params.permit(:first_name, :last_name, :url)
  end

  def json_response(message, user = nil)
    return { success: false, message: message } if user.nil?

    { success: true, user: user }
  end
end
