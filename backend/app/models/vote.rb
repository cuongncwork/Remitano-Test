class Vote < ApplicationRecord
  belongs_to :video
  belongs_to :user

  enum vote_type: { like: 1, dislike: -1 }
end
