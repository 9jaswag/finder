# frozen_string_literal: true

class Api::V1::EmailSearchController < ApplicationController
  def create
    email_formats = EmailFinder::EmailFormatsGenerator.new(email_search_params).call
    valid_email = EmailFinder::MailboxLayerService.new(email_formats).call

    render json: { message: 'so far' }
  end

  private

  def email_search_params
    params.permit(:first_name, :last_name, :url)
  end
end
