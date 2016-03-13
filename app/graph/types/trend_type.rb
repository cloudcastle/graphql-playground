TrendType = GraphQL::ObjectType.define do
  name "Trend"
  description "A root Trend entry"
  field :id, types.ID, "Trend ID in DB"
  field :summary, TrendSummaryType do
    description "Brief description of a trend"
    resolve -> (obj, args, ctx) {
      TrendSummaryDecorator.new(obj)
    }
  end
  field :velocity_chart, ChartType do
    description "Velocity Chart series"
    resolve -> (obj, args, ctx) {
      TrendChartDecorator.new(obj)
    }
  end
end