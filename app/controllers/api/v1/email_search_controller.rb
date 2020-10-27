# frozen_string_literal: true

class Api::V1::EmailSearchController < ApplicationController
  def index
    User.all.order(created_at: :desc)
  end

  def create
    email_formats = EmailFinder::EmailFormatsGenerator.new(email_search_params).call
    valid_email = EmailFinder::MailboxLayerService.new(email_formats).call

    if valid_email
      user = User.create!(first_name: email_search_params[:first_name],
                          last_name: email_search_params[:last_name],
                          email: valid_email)

      render json: json_response(user)
    else
      render json: json_response
    end
  end

  private

  def email_search_params
    params.permit(:first_name, :last_name, :url)
  end

  def json_response(user = nil)
    return { success: false, message: 'No valid email found.' } if user.nil?

    { success: true, user: user }
  end
end
