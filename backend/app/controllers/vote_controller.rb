class VoteController < ApplicationController
  def new
    vote = Vote.new vote_params
    if vote.save
      render json: { vote: vote }
    else
      render json: { message: vote.errors.full_messages.to_sentence }, status: 400
    end
  end

  private

  def vote_params
    params.require(:vote).permit :user_id, :vote_type, :video_id
  end
end
