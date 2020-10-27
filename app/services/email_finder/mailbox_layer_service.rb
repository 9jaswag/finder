# frozen_string_literal: true

module EmailFinder
  class MailboxLayerService
    require 'httparty'

    def initialize(email_formats)
      @email_formats = email_formats
    end

    def call
      @email_formats.each do |email|
        url = mailboxlayer_endpoint(email)
        response = HTTParty.get(url)

        return email if response['smtp_check']
      end

      false
    end

    private

    def mailboxlayer_api_key
      ENV['MAILBOXLAYER_API_KEY']
    end

    def mailboxlayer_endpoint(email)
      "http://apilayer.net/api/check?access_key=#{mailboxlayer_api_key}&email=#{email}"
    end
  end
end
