class Bench < ActiveRecord::Base
  validates :description, presence: true
  validates :lat, :lng, numericality: true
end
