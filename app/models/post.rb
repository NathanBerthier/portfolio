class Post < ApplicationRecord
  validates :photo, presence: true

  has_rich_text :body
  has_one_attached :photo
end
