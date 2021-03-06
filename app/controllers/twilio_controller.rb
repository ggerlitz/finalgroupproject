class TwilioController < ApplicationController
	skip_before_action :verify_authenticity_token

	def incoming
		from_number = params["From"].delete "+1"
		recipient_email = params["Body"]
		@user = User.find_by(phone: from_number)
			if @user
				@personalcard = @user.business_cards[0]
				CardMailer.business_card(recipient_email, @personalcard).deliver_now
			end			
		response = Twilio::TwiML::Response.new do |r|
			if @user 
				r.sms "Your card is on its way to #{recipient_email}"
			else
				r.sms 'There was a problem sending your business card.'
			end
		end
		render text: response.text
	end
	

end


