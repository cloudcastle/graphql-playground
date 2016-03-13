TrendsListType = GraphQL::ObjectType.define do
  name 'TrendList'
  description 'A root TrendsList entry'
  connection :summaries, TrendSummaryType.connection_type do
    description 'List of trend summaries'
    resolve -> (obj, args, ctx) {
      obj.trends.take(args['first']).map { |t| TrendSummaryDecorator.new(t) }
    }
  end
end
