class Video < ApplicationRecord
  belongs_to :user
  has_many :votes, dependent: :destroy

  YOUTUBE_URL_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

  validates :url, presence: { message: "Youtube URL required" }, format: { with: YOUTUBE_URL_REGEX, message: "Youtube URL invalid" }
end
