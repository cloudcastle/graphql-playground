class TrendSummaryDecorator < Draper::Decorator
  delegate :name, :description
end
