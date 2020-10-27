# frozen_string_literal: true

module EmailFinder
  class EmailFormatsGenerator
    def initialize(params)
      @first_name = params[:first_name].downcase
      @last_name = params[:last_name].downcase
      @url = params[:url].downcase
    end

    def call
      [].tap do |formats|
        email_domain = "@#{@url}"
        formats << "#{@first_name}.#{@last_name}#{email_domain}"
        formats << "#{@first_name}#{email_domain}"
        formats << "#{@first_name}#{@last_name}#{email_domain}"
        formats << "#{@last_name}.#{@first_name}#{email_domain}"
        formats << "#{@first_name[0]}.#{@last_name}#{email_domain}"
        formats << "#{@first_name[0]}#{@last_name[0]}#{email_domain}"
      end
    end
  end
end
