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

        return email if valid_email?(response)
      end

      false
    end

    private

    def valid_email?(response)
      response['format_valid'] && response['mx_found'] && response['smtp_check'] && !response['catch_all']
    end

    def mailboxlayer_api_key
      ENV['MAILBOXLAYER_API_KEY']
    end

    def mailboxlayer_endpoint(email)
      "http://apilayer.net/api/check?access_key=#{mailboxlayer_api_key}&email=#{email}"
    end
  end
end
