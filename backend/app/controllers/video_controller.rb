class VideoController < ApplicationController
  skip_before_action :authenticate_request, only: :index

  def index
    videos = Video.all
    render json: { videos: videos }
  end

  def new
    video = Video.new video_params
    if vote.save
      NotificationBroadcastJob.perform_later({ url: params[:url] })
      render json: { vote: vote }
    else
      render json: { message: vote.errors.full_messages.to_sentence }, status: 400
    end
  end

  private

  def video_params
    params.require(:video).permit :url
  end
end
