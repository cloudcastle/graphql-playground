class TrendSummaryDecorator < Draper::Decorator
  delegate :id, :name, :description
end
