# frozen_string_literal: true

class Api::V1::EmailSearchController < ApplicationController
  def create
    binding.pry
  end

  private

  def email_search_params
    params.permit(:first_name, :last_name, :url)
  end
end
