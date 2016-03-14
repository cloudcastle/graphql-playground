class TrendsListService
  def trends(args)
    Trend
        .limit(args['first'])
        .map { |t| TrendSummaryDecorator.new(t) }
  end
end