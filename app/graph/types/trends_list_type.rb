TrendsListType = GraphQL::ObjectType.define do
  name 'TrendList'
  description 'A root TrendsList entry'
  field :summaries, types[TrendSummaryType] do
    description 'List of trend summaries'
    resolve -> (obj, args, ctx) { obj.trends.map { |t| TrendSummaryDecorator.new(t) } }
  end
end
