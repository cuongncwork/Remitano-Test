class VideosController < ApplicationController
  skip_before_action :authenticate_request, only: :index
  before_action :check_url, only: :create

  def index
    videos = Video.order created_at: :desc
    render json: videos
  end

  def create
    video = Video.new video_params

    if video.save
      NotificationBroadcastJob.perform_later({ url: params[:video][:url],
                                               title: @title,
                                               description: @description,
                                               embed_html: @embed_html,
                                               user: { id: current_user.id, email: current_user.email },
                                               votes: [] })
      render json: video
    else
      render json: { message: video.errors.full_messages.to_sentence }, status: 400
    end
  rescue Yt::Errors::NoItems
    render json: { message: "Youtube video not found" }, status: 404
  end

  private

  def video_params
    params.require(:video).permit(:url, :user_id).merge(title: @title, description: @description, embed_html: @embed_html)
  end

  def check_url
    unless params[:video][:url]
      return render json: { message: "Youtube URL required" }, status: 400
    end

    youtube_id = get_youtube_id params[:video][:url]

    if youtube_id
      youtubeVideo = Yt::Video.new id: youtube_id
      @title = youtubeVideo.title
      @description = youtubeVideo.description
      @embed_html = youtubeVideo.embed_html
    else
      return render json: { message: "Youtube URL invalid" }, status: 400
    end
  rescue Yt::Errors::NoItems
    return render json: { message: "Youtube video not found" }, status: 404
  end

  def get_youtube_id(url)
    regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    match = regex.match(url)
    if match && !match[1].blank?
      match[1]
    else
      nil
    end
  end
end
