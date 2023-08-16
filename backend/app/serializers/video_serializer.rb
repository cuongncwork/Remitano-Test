class VideoSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :votes

  attributes :id, :title, :description, :embed_html
end
